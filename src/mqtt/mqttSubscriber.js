const mqtt = require("mqtt");
const SensorReading = require("../models/SensorReading");

const brokerUrl = process.env.MQTT_BROKER_URL || "mqtt://broker.hivemq.com";
const client = mqtt.connect(brokerUrl);

client.on("connect", () => {
  console.log("MQTT connected");

  client.subscribe("iot/sensor/+/temperature", (err) => {
    if (!err) {
      console.log("Subscribed to MQTT sensor topics");
    }
  });
});

client.on("message", async (topic, message) => {
  try {
    const [, , deviceId] = topic.split("/");
    const temperature = parseFloat(message.toString());

    if (isNaN(temperature)) return;

    await SensorReading.create({
      deviceId,
      temperature,
      deviceTimestamp: Date.now(),
    });

    console.log(`MQTT reading saved for ${deviceId}`);
  } catch (err) {
    console.error("MQTT error:", err.message);
  }
});