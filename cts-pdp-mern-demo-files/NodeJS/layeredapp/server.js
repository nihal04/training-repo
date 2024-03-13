const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const session = require("express-session");
const routes = require("./Routes/route");
// const passport = require("passport");
// const { PassportAuth } = require("./auth/passport-config");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/CustomersDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to mongodb");
  })
  .on("error", (err) => {
    console.log(err);
  });

// const store = session.MemoryStore();
// app.use(
//   session({
//     secret: "this is my secret for session",
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60000,
//     },
//     store: store,
//     resave: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(PassportAuth());

const port = 8000 || process.env.port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
