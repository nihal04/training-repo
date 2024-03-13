import UserModel from "../models/UserModel.js";
import blogModel from "../models/blogModel.js";
import GenerateToken from "../auth/auth.js";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  let result = await UserModel.findOne({ email: req.body.email });
  if (result != null) {
    res.status(409).send({ message: "User with same email already exists" });
  } else {
    let user = new UserModel({
      username: req.body.username,
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

const GetBlogs = async (req, res) => {
    res.status(200).send(await blogModel.find({}));
  }

const AddBlog = async (req, res) => {
    try {
        let blg = new blogModel({
            username: req.body.username,
            blogtitle: req.body.blogtitle,
            blog: req.body.blog,
          });
        await blg.save();
      res.status(201).send({ message: "Blog added successfully" });
    } catch (err) {
      res.status(409).send({status: 409, message: err.message});
    }
  }

const DeleteBlog = async(req, res) => {
    try{
        await blogModel.deleteOne({ blogtitle: req.params.id });
        res.status(200).send({ message: "Blog deleted successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

const UpdateBlog = async(req, res) => {
    try{
        await blogModel.updateOne(
            { blogtitle: req.params.id},
            {
                username: req.body.username,
                blogtitle: req.body.blogtitle,
                blog: req.body.blog,
            }
          );
        res.status(200).send({ message: "Blog updated successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

export { Register, Login, GetBlogs, AddBlog, DeleteBlog, UpdateBlog };