import { GetUserSer, AddUserSer, UpdateUserSer } from "../servises/userService.js";
import kafka from "kafka-node";
import multer from "multer";
import bcrypt from "bcryptjs";

let client;
let producer;

const GetUser = async (req, res) => {
  try {
    let result = await GetUserSer(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

const Register = async (req, res) => {
    try{
      let usr = await AddUserSer(req.body);
      client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
      producer = new kafka.Producer(client);

      producer.on("ready", () => {
        console.log("Producer is ready", usr);
        const payloads = [{ topic: "movietopic", messages: JSON.stringify(usr) }];
    
        producer.send(payloads, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Message Sent");
          }
        });
      });    
      
      producer.on("error", (err) => {
        console.log("Producer error", err);
      });
        // await AddUserSer(req.body);
        res.status(201).send({ message: "User registered successfullyy" });     
  } catch(err) {
    res.status(409).send({status: 409, message: err.message});
  }
  };

const Update = async (req, res) => {
    try{
        await UpdateUserSer(req.body);
        res.status(201).send({ message: "User updated successfullyy" });
  } catch(err) {
    res.status(409).send({status: 409, message: err.message});
  }
  };

const storage = multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      done(null, Date.now() + "-" + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

const UploadImage = async (req, res) => {
  if (!req.file) {
    res.send("No file uploaded");
  }
  res.send("File uploaded successfully");
}


export { Register, Update, upload, UploadImage, GetUser };