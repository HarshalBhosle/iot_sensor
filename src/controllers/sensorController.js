const SensorReading = require("../models/SensorReading");

// POST /api/sensor/ingest
exports.ingestSensorData = async (req, res, next) => {
  try {
    const { deviceId, temperature, deviceTimestamp } = req.body;

    const reading = await SensorReading.create({
      deviceId,
      temperature,
      deviceTimestamp: deviceTimestamp || Date.now(),
    });

    res.status(201).json({
      message: "Sensor data ingested successfully",
      data: reading,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/sensor/:deviceId/latest
exports.getLatestReading = async (req, res, next) => {
  try {
    const { deviceId } = req.params;

    const latestReading = await SensorReading
      .findOne({ deviceId })
      .sort({ deviceTimestamp: -1 });

    if (!latestReading) {
      return res.status(404).json({
        message: "No data found for this device",
      });
    }

    res.status(200).json(latestReading);
  } catch (error) {
    next(error);
  }
};