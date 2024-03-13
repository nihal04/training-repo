import User from "../models/User.js";

async function Register(req, res) {
  let result = await User.findOne({ email: req.body.email });
  if (result) {
    res.status(400);
    res.send("User already exists");
  } else {
    let { name, email, password } = req.body;
    await User.create({ name: name, email: email, password: password });
    res.status(201);
    res.send("User registered successfully");
  }
}

export { Register };
