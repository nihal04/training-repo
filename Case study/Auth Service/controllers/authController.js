import { loginSer } from "../services/authService.js";
import bcrypt from "bcryptjs";
import profile from "../models/authModel.js";
import GenerateToken from "../auth/auth.js"

const Login = async (req, res) => {
    try{
        let usr = await loginSer(req.body);
        if (bcrypt.compareSync(req.body.password, usr.password)) {
            res.status(200).send({ status:200, token: GenerateToken(req.body), data:usr });
         } else {
            res.status(401).send({status: 401, message: "Invalid Credentials"});
      }
  } catch(err) {
    res.status(409).send({status: 409, message: err.message});
  }
};

const isAuthenticated = async (req, res) => {
  res.status(200).send({ status:200, authenticated: true});
}


export { Login, isAuthenticated };