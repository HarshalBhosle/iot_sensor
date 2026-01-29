const mongoose = require("mongoose");

const sensorReadingSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
      index: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    deviceTimestamp: {
      type: Number,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

sensorReadingSchema.index({ deviceId: 1, deviceTimestamp: -1 });

module.exports = mongoose.model("SensorReading", sensorReadingSchema);