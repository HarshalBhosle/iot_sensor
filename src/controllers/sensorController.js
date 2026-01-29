const SensorReading = require("../models/sensorReading");

// POST /api/sensor/ingest
exports.ingestSensorData = async (req, res) => {
  try {
    const { deviceId, temperature, deviceTimestamp } = req.body;

    // Validation
    if (!deviceId || temperature === undefined) {
      return res.status(400).json({
        message: "deviceId and temperature are required",
      });
    }

    const reading = new SensorReading({
      deviceId,
      temperature,
      deviceTimestamp: timestamp || Date.now(),
    });

    await reading.save();

    res.status(201).json({
      message: "Sensor data ingested successfully",
      data: reading,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/sensor/:deviceId/latest
exports.getLatestReading = async (req, res) => {
  try {
    const { deviceId } = req.params;

    const latestReading = await SensorReading.findOne({ deviceId })
      .sort({ timestamp: -1 });

    if (!latestReading) {
      return res.status(404).json({
        message: "No data found for this device",
      });
    }

    res.status(200).json(latestReading);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};