const express = require("express");
const process = require("process");
const cluster = require("cluster");
const numCpus = require("os").availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited`);
  });
} else {
  const app = express();
  app.get("/task", (req, res) => {
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total++;
    }
    res.send(`Total: ${total}`);
  });

  app.listen(3000, () => {
    console.log(`Worker process ${process.pid} is listening on port 3000`);
  });

  console.log(`Worker process ${process.pid} started`);
}
