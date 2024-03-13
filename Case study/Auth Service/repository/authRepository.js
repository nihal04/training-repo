import authuser from "../models/authModel.js";
import kafka from "kafka-node";
import bcrypt from "bcryptjs";

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new kafka.Consumer(client, [{topic: "movietopic"}]);
consumer.on("message", (message) => {
  let regData = JSON.parse(message.value);
  let usr = new authuser({
    email: regData.email,
    password: regData.password,
  });
  usr.save();
});

consumer.on("error", (err) => {
  console.log("Consumer error", err);
});


const GetAuthRepo = async (id) => {
  return await authuser.findOne({ where: { email: id } });
}

export { GetAuthRepo };