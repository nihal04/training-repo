import contact from "../models/model.js";
import GenerateToken from "../auth/auth.js";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  try{
  let result = await contact.findOne({ where: { email: req.body.email } });
  if(result == null) {
  let user = new contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  await user.save();
  res.status(201).send({status: 201, message: "User registered successfully" });
  } else {
    res.status(409).send({status: 409, message: "User with this email already registered" });
  }
} catch(err) {
  res.status(409).send({status: 409, message: err.message});
}
};

const Login = async (req, res) => {
  try {
    let user = await contact.findOne({ where: { email: req.body.email } });
    if (user != null) {
       if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).send({ status:200, token: GenerateToken(req.body) });
       } else {
          res.status(401).send({status: 401, message: "Invalid Credentials"});
    }
  } else {
      res.status(401).send({status: 401, message: "Invalid Credentials"});
   }
  }
  catch (err) {
    res.status(409).send({status: 409, message: err.message});
  }
  
};

// const Logout = async (req, res) => {
//     req.logout((err) => {
//       if (!err) {
//         res.redirect("/login");
//       }
//     });
// }

export { Register, Login };