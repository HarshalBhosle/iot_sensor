# IoT Sensor Backend Service 

A Node.js backend service that ingests IoT sensor temperature readings, stores them in MongoDB Atlas, and exposes REST APIs to retrieve the latest reading for a device.

This project was built as part of a **Node.js Internship Pre-Assessment Assignment**.



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
iot_sensor/
│
├── src/
│   │
│   ├── server.js              # Entry 
│   ├── app.js                 # Express 
│   │
│   ├── config/
│   │   ├── db.js              # MongoDB 
│   │   ├── mqtt.js            # MQTT 
│   │
│   ├── models/
│   │   └── SensorReading.js   # Mongoose 
│   │
│   ├── controllers/
│   │   └── sensorController.js
│   │
│   ├── routes/
│   │   └── sensorRoutes.js
│   │
│   ├── middlewares/
│   │   ├── validateSensorData.js
│   │   └── errorHandler.js
│   │
│   ├── services/
│   │   └── sensorService.js   # DB logic 
│   │
│   ├── mqtt/
│   │   └── mqttSubscriber.js  # MQTT 
│   │
│   ├── utils/
│   │   └── logger.js
│   │
│   └── constants/
│       └── topics.js
│
├── tests/
│   └── sensor.test.js
│
├── .env                       # real 
├── .env.example               # sample env 
├── .gitignore
├── package.json
├── package-lock.json
├── README.md

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
```
Sample output:
{
    "deviceId": "sensor-01",
    "temperature": 32.5,
    "deviceTimestamp": 1769711573487,
    "createdAt": "2026-01-29T18:32:53.496Z",
    "updatedAt": "2026-01-29T18:32:53.496Z",
    "__v": 0,
    "id": "697ba7d5213f8a4744ddb87d"
}
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
<<<<<<< HEAD
```
Sample output:
{
    "message": "Sensor data ingested successfully",
    "data": {
        "deviceId": "sensor-00",
        "temperature": 34,
        "deviceTimestamp": 1770703622774,
        "createdAt": "2026-02-10T06:07:02.782Z",
        "updatedAt": "2026-02-10T06:07:02.782Z",
        "id": "698acb06d1363d70644c72b3"
    }
}
```
=======
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
---
## Postman Examples
```bash
GET http://localhost:5100/
```
response:
```bash
IoT Sensor API is running
```
---

```bash
POST http://localhost:5100/api/sensor/ingest
```
body
```bash
{
  "temperature": 50,
  "deviceId": "sensor-04"
}
```
response:
```bash
{
    "message": "Sensor data ingested successfully",
    "data": {
        "deviceId": "sensor-04",
        "temperature": 50,
        "deviceTimestamp": 1769713543165,
        "createdAt": "2026-01-29T19:05:43.175Z",
        "updatedAt": "2026-01-29T19:05:43.175Z",
        "id": "697baf874ed98aa835714562"
    }
}
```
---
```bash
GET http://localhost:5100/api/sensor/sensor-98/latest
```
response:
```bash
{
    "deviceId": "sensor-98",
    "temperature": 44,
    "deviceTimestamp": 1769713578920,
    "createdAt": "2026-01-29T19:06:18.921Z",
    "updatedAt": "2026-01-29T19:06:18.921Z",
    "id": "697bafaa4ed98aa835714566"
}
```

>>>>>>> bb98dfef1745992c7fcf1247f71e2cdeced23be3
