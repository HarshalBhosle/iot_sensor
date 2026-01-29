const express = require("express");
const router = express.Router();

const {
  ingestSensorData,
  getLatestReading,
} = require("../controllers/sensorController");

const validateSensorData = require("../middlewares/validateSensorData");

router.post("/ingest", validateSensorData, ingestSensorData);
router.get("/:deviceId/latest", getLatestReading);

module.exports = router;