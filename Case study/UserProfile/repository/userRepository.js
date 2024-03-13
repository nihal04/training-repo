import profile from "../models/userModel.js"
import bcrypt from "bcryptjs";

const GetUserRepo = async (email) => {
  return await profile.findOne({ where: { email: email } });
}

const AddUserRepo = async (user) => {
    let usr = new profile({
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phonenumber,
        email: user.email,
        age: user.age,
        password: bcrypt.hashSync(user.password),
        // imagename: user.imagename,
      });
      await usr.save();
      let obj = {email: usr.email, password: usr.password};
      return obj;
}

const UpdateUserRepo = async (user) => {
  await profile.update(
    {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phonenumber,
        age: user.age,
        password: user.password,
        // password: bcrypt.hashSync(user.password),
        // imagename: user.imagename,
    },
    { where: { email: user.email } }
  );
}

export { GetUserRepo, AddUserRepo, UpdateUserRepo };