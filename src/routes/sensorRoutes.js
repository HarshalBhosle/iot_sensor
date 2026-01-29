const express = require("express");
const router = express.Router();
const {
  ingestSensorData,
  getLatestReading,
} = require("../controllers/sensorController");

router.post("/ingest", ingestSensorData);
router.get("/:deviceId/latest", getLatestReading);

module.exports = router;