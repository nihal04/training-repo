const express = require("express");
const routes = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(9000, () => {
  console.log("Server is running...");
});
