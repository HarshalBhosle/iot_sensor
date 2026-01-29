# IoT Sensor Backend Service 🌡️

A Node.js backend service that ingests IoT sensor temperature readings, stores them in MongoDB Atlas, and exposes APIs to retrieve the latest reading for a device.

This project was built as part of a **Node.js Internship Pre-Assessment Assignment**.

---

## 🚀 Features

- Ingest IoT sensor temperature readings
- Store data in MongoDB Atlas using Mongoose
- Fetch the latest reading for a device
- Automatic timestamp handling
- Clean MVC project structure
- Bonus: MQTT data ingestion support

---

## 🛠️ Tech Stack

- **Node.js** (CommonJS)
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **MQTT (optional bonus)**
- **Nodemon**


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
MQTT_BROKER_URL=mqtt://broker.hivemq.com