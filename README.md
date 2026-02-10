# IoT Sensor Backend Service 

A Node.js backend service that ingests IoT sensor temperature readings, stores them in MongoDB Atlas, and exposes REST APIs to retrieve the latest reading for a device.

This project was built as part of a **Node.js Internship Pre-Assessment Assignment**.



## ⬇️ Installation

create a folder with the name and then on cmd of code editor initialize node and install the required dependencies of [node](https://nodejs.org/en).

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
PORT=5000
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
http://localhost:5000
```
### GET/
request
```bash 
GET http://localhost:5000/
GET http://localhost:5000/api/sensor/sensor-01/latest

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
