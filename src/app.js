const express = require("express");
const cors = require("cors");
const sensorRoutes = require("./routes/sensorRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sensor", sensorRoutes);

app.get("/", (req, res) => {
  res.send("IoT Sensor API is running");
});

app.use(errorHandler);

module.exports = app;