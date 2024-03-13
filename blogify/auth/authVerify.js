import jwt from "jsonwebtoken";

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

export default VerifyTokenMiddleware