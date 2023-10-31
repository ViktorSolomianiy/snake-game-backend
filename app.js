const express = require("express");
const cors = require("cors");

const PORT = 4090 || 3000;

const routes = require("./routes/routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running");
});
