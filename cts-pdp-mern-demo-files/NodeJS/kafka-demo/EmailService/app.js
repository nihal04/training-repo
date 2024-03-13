import express from "express";
import kafka from "kafka-node";
const app = express();

// Write Code here for saving data to database
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const consumer = new kafka.Consumer(client, [{topic: "mytopic"}]);
consumer.on("message", (message) => {
    const msg = JSON.parse(message.value);
    console.log(msg);
  console.log(`Email sent to ${msg.email}`);
});

consumer.on("error", (err) => {
  console.log("Consumer error", err);
});

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
