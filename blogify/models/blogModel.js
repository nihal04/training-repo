import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
  username: String,
  blogtitle: String,
  blog: String,
});

export default mongoose.model("Blog", BlogSchema, "Blogs");