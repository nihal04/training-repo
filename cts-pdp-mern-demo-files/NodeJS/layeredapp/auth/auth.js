// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const session = require("express-session");
const jwt = require("jsonwebtoken");

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser((id, done) => {
//   done(null, session.Cookie.user);
// });

// function PassportAuth() {
//   return new LocalStrategy(
//     { usernameField: "email", passwordField: "password" },
//     (username, password, done) => {
//       return done(null, session.Cookie.user);
//     }
//   );
// }

function VerifyTokenMiddleware(req, res, next) {
  if (VerifyToken(req.headers.authorization) === true) {
    next();
  } else {
    res
      .status(401)
      .send({ message: "You are not authorized to access this endpoint" });
  }
}

const VerifyToken = (token) => {
  let res = jwt.verify(token, "this is my secret for jwt", (err, decode) =>
    decode !== undefined ? decode : err
  );
  return !(res instanceof Error);
};

module.exports = { VerifyTokenMiddleware };
