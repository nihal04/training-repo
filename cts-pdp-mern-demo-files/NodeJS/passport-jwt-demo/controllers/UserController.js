import UserModel from "../models/UserModel.js";
import GenerateToken from "../auth/auth.js";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  let result = await UserModel.findOne({ email: req.body.email });
  if (result != null) {
    res.status(409).send({ message: "User with same email already exists" });
  } else {
    let user = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  }
};

const Login = async (req, res) => {
  let user = await UserModel.findOne({ email: req.body.email });
  if (user != null) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).send({ token: GenerateToken(req.body) });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } else {
    res.status(401).send("Invalid Credentials");
  }
};

export { Register, Login };
