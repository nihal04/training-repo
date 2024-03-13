const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const MongoDbStore = require('connect-mongodb-session')(session);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// const store = session.MemoryStore();
const store = new MongoDbStore({
    uri: "mongodb://localhost:27017/UsersDB",
    collection: 'app_sessions'
})

mongoose.connect("mongodb://localhost:27017/UsersDB");
mongoose.connection.once("open", (err) => {
  if (!err) {
    console.log("Connected to Database");
  }
});

app.use(
  session({
    secret: "this is my secret",
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 60000,
    },
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  await User.findById(id).then((user) => done(null, user));
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (username, password, done) {
      let result = await User.findOne({ email: username });
      if (result != null) {
        if (bcrypt.compareSync(password, result.password)) {
          return done(null, result);
        } else {
          return done(null, false, { message: "Invalid Credentials" });
        }
      } else {
        return done(null, false, { message: "Invalid Credentials" });
      }
    }
  )
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile");
});

app.post("/register", async (req, res) => {
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  await user.save();
  res.redirect("/");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.post("/logout", function (req, res) {
  req.logout((err) => {
    if (!err) {
      res.redirect("/login");
    }
  });
});

app.listen(9000, () => {
  console.log("Server surnning at port 9000");
});
