
---

# 🩸 BLOOD-BRIDGE

> A real-time, life-saving platform to connect blood donors with those in urgent need.

---

## 🚀 Overview

**BLOOD BRIDGE** is a full-stack web application designed to bridge the gap between **blood donors** and **recipients** during medical emergencies. With live tracking, real-time alerts, and verified user profiles, the system ensures timely and secure blood donations.

---

## ✨ Features

* 🔐 **JWT Authentication** for secure access
* 📍 **Live location mapping** using Leaflet.js
* 📣 **Emergency alerts** through push notifications
* 🩸 **Donor registration** and **search by blood group**
* 🧾 **Donation history** and user dashboard
* 📡 **Real-time updates** using Firebase & Firestore

---

## 🛠️ Tech Stack

| Tech         | Usage                                  |
| ------------ | -------------------------------------- |
| **Frontend** | React.js + Vite + Tailwind CSS         |
| **Backend**  | Node.js + Express                      |
| **Database** | MongoDB + Firebase Firestore           |
| **Auth**     | JWT (JSON Web Token)                   |
| **Map**      | Leaflet.js                             |
| **Other**    | Firebase Cloud Messaging (FCM), dotenv |

---

## 📂 Project Structure

```
BLOOD-Bridge/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├          
│── controllers/          # Backend with Express
│── middleware/
│── models/
│── routes/
│── server.js
├── .env
├── README.md
└── package.json
```

---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/MANASA-NUKALA/BLOOD-BRIDGE.git
cd BLOOD-BRIDGE
```

### 2. Setup Backend

```bash
cd server
npm install
touch .env
```

**`.env` content:**

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=...
FIREBASE_PROJECT_ID=...
```

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---


---

## 🔐 Environment Variables

| Variable           | Description               |
| ------------------ | ------------------------- |
| `JWT_SECRET`       | Secret key for JWT auth   |
| `MONGO_URI`        | MongoDB connection string |
| `FIREBASE_API_KEY` | Firebase project API key  |
| `PORT`             | Backend server port       |

---

## 🙋‍♀️ Team

* **You** – Full-stack Developer (Person 1)
* Collaborators as per your team setup.

---

## 📌 Future Scope

* 🧬 Blood type compatibility checker
* 📈 Donation analytics dashboard
* 📲 Mobile App integration

---

## 🩸 Why BLOOD-BRIDGE?

Because **every second counts** when a life is on the line. BLOOD Bridge is your digital companion in emergencies, ensuring no one has to wait for help when it matters the most.

---