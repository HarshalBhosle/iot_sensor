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

Create a project directory, navigate into it, and initialize the [Node.js](https://nodejs.org/en) application. Install the required dependencies using npm.
```bash
npm init -y
npm install express mongoose dotenv cors mqtt
npm install --save-dev nodemon

```

## 🛠️ Tech Stack

- **Node.js 18+/20 lts** (CommonJS)
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
## 🗄️ Database Setup (MongoDB Atlas)

1. Create a MongoDB Atlas account at  
   https://www.mongodb.com/atlas

2. Create a **Free Tier (M0) cluster**

3. Add a database user:
   - Username & password
   - Role: Read and Write

4. Configure Network Access:
   - Allow IP `0.0.0.0/0` (for development)

5. Get the MongoDB connection string:
   - mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/iot_db
   
6. Create a `.env` file in the project root:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/iot_db
MQTT_BROKER_URL=mqtt://broker.hivemq.com
```




---
## 🛠️ Running the Backend

```bash
npm run dev
//or 
node src/server.js
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
- topic - iot/sensor/sensor-99/temperature
- message - 36.1

---

## 🌐 Endpoints Checks
### Base URL
```Bash 
http://localhost:5000
```
### GET/
request
```bash 
GET http://localhost:5000/
GET http://localhost:5000/api/sensor/:deviceId/latest

```

### POST/
POST
``` bash
POST http://localhost:5000/api/sensor/ingest
```
Header
```bash
Content-Type: application/json
```
body
```bash
{
  "deviceId": "sensor-01",
  "temperature": 35.1
}
```
### Expected Response ([postman](https://www.postman.com/))

#### GET
```bash
http://localhost:5000/api/sensor/:deviceId/latest
```
```bash
{
  "_id": "...",
  "deviceId": "sensor-01",
  "temperature": 32.5,
  "deviceTimestamp": 1700000000000,
  "createdAt": "...",
  "updatedAt": "..."
}
```
