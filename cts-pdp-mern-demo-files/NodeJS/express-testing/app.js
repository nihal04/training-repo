import express from "express";
import routes from "./routes/UserRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/TestDB");
const db = mongoose.connection.once("open", ()=>{
    console.log("Connected to database");
});

db.on("error", (err)=>{
    console.log(err);
});

app.use("/api", routes);


app.listen(9000, ()=>{
    console.log("Server running on port 9000");
})