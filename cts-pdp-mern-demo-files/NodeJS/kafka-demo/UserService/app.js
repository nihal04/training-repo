import express from "express";
import kafka from "kafka-node";
const app = express();

app.use(express.json());

let client;
let producer;

app.post("/register", (req, res) => {
  // Write Code here for saving data to database
  client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
  producer = new kafka.Producer(client);
  producer.on("ready", () => {
    console.log("Producer is ready");
    const payloads = [{ topic: "mytopic", messages: JSON.stringify({name: 'a', email: 'b@gmail.com'}) }];

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

  res.send(`User registered with email ${req.body.email}`);
});

app.listen(9000, () => {
  console.log("Server is running at port 9000");
});
