import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    id: String,
    email: String,
    firstname: String,
    lastname: String,
    phonenumber: Number,
    age: Number,
    city: String,
});

export default mongoose.model("Contact", contactSchema, "Contacts");