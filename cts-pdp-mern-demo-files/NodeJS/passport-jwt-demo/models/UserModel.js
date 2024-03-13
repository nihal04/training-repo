import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
});

export default mongoose.model("User", UserSchema, "Users");
