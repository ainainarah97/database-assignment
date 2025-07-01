
# 🛺 MyTaxi Backend (Database Assignment)

This is the backend API for the **MyTaxi** ride-hailing system, built with **Node.js**, **Express**, and **MongoDB Atlas**.

It handles user registration, authentication, and stores user data in the MongoDB `ride_hailing_system` database.

---

## 📁 Project Structure

```bash
mytaxi-backend/
├── .env.example         # Environment variable template
├── models/              # Mongoose schemas
│   └── User.js
├── routes/              # API route definitions
│   └── users.js
├── server.js            # Main server file
├── package.json         # Node.js project configuration
└── README.md            # Project documentation
````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ainainarah97/database-assignment.git
cd database-assignment/mytaxi-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory based on the provided `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> ✅ Replace `your_mongodb_connection_string` with your actual **MongoDB Atlas URI**, using your **database user credentials** — not your MongoDB Atlas login.

### 4. Start the server

```bash
node server.js
```

You should see:

```
MongoDB Connected!
Server running on port 5000
```

---

## 📫 API Endpoints

### POST `/api/users/register`

Register a new user.

#### 🔸 Request Body:

```json
{
  "name": "Amar",
  "matricNo": "B0123456",
  "role": "rider",
  "phone": "0123456789",
  "password": "secure123"
}
```

#### 🔸 Response:

```json
{
  "message": "User registered successfully"
}
```

---

## 🧠 Tech Stack

* **Node.js** & **Express.js**
* **MongoDB Atlas** (cloud database)
* **Mongoose** (MongoDB ODM)
* **dotenv** (environment variable management)

---

## ✅ Features

* Register user data and store in MongoDB Atlas
* Organized route and model structure
* Environment configuration with `.env`

---

## 👩‍💻 Author

**Aina Inarah**
GitHub: [@ainainarah97](https://github.com/ainainarah97)

---

## 📜 License

This project was developed for a university **Database Assignment** and is intended for academic purposes.

```
