import jwt from "jsonwebtoken";
const GenerateToken = (user) => {
  let token = jwt.sign(user, "this is my secret for jwt", {
    expiresIn: "1h",
  });
  console.log(token);
  return token;
};

export default GenerateToken;
