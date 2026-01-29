# IoT Sensor Backend Service 🌡️

A Node.js backend service that ingests IoT sensor temperature readings, stores them in MongoDB Atlas, and exposes REST APIs to retrieve the latest reading for a device.

This project was built as part of a **Node.js Internship Pre-Assessment Assignment**.

---

## 🚀 Features

- Ingest IoT sensor temperature readings via REST API
- Store sensor data in MongoDB Atlas using Mongoose
- Fetch the latest reading for a device
- Automatic timestamp handling (device + server time)
- Clean MVC-based backend architecture
- Bonus: MQTT data ingestion using a public broker

---

## ⬇️ Installation

create a folder with the name and then on cmd of code editor initialize node and install the required dependencies of [node](https://nodejs.org/en).

```bash
npm init -y
npm install express mongoose dotenv cors mqtt
npm install --save-dev nodemon

```

## 🛠️ Tech Stack

- **Node.js** (CommonJS)
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **MQTT**
- **Nodemon**

---

## 📁 Project Structure

```bash
src/
├── app.js
├── server.js
│
├── config/
│ └── db.js
│
├── models/
│ └── SensorReading.js
│
├── controllers/
│ └── sensorController.js
│
├── routes/
│ └── sensorRoutes.js
│
├── middlewares/
│ ├── validateSensorData.js
│ └── errorHandler.js
│
└── mqtt/
└── mqttSubscriber.js
```


---
## 🛠️ Running the Backend

```bash
npm run dev
//or 
node src/server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=5100
MONGO_URI=your_mongodb_atlas_connection_string
MQTT_BROKER_URL=mqtt://broker.hivemq.com
```
---

## 🤖 MQTT setup
- Install [mqtt explorer](https://github.com/thomasnordquist/MQTT-Explorer/releases/download/v0.4.0-beta.6/MQTT-Explorer-Setup-0.4.0-beta.6.exe).
- Open mqtt explorer and Create a new connection
- Click + Add connection

- Fill ONLY these fields 👇

- Connection settings.
- Name: HiveMQ Public.

- Host: broker.hivemq.com

- Port: 1883

- Protocol: mqtt://

- Username: (leave empty)

- Password: (leave empty)

⚠️ Do NOT enable TLS / SSL.

- Click CONNECT

### after connected 
- topic - iot/sensor/sendor-id/temperature
- message - 36.1

---

## 🌐 Endpoints Checks
### Base URL
```Bash 
http://localhost:5100
```
### GET/
request
```bash 
GET http://localhost:5100/
GET http://localhost:5100/api/sensor/sensor-01/latest

```

### POST/
``` bash
POST http://localhost:5000/api/sensor/ingest
```
body
```bash
{
  "deviceId": "sensor-00",
  "temperature": 00
}
```
