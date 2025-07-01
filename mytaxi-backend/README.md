Here's a clean, complete `README.md` for your [mytaxi-backend](https://github.com/ainainarah97/database-assignment/tree/main/mytaxi-backend) project, based on what's in your GitHub repo:

---

```markdown
# 🛺 MyTaxi Backend (Database Assignment)

This is the backend API for the **MyTaxi** ride-hailing system, built with **Node.js**, **Express**, and **MongoDB Atlas**.

It handles user registration, authentication, and stores data in the MongoDB `ride_hailing_system` database.

---

## 📁 Project Structure

```

mytaxi-backend/
├── .env.example         # Environment variable template
├── models/              # Mongoose schemas
│   └── User.js
├── routes/              # API route definitions
│   └── users.js
├── server.js            # Main server file
├── package.json         # Node.js project config
└── README.md            # You're here!

````

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ainainarah97/database-assignment.git
cd database-assignment/mytaxi-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root folder (based on `.env.example`):

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> 💡 Use your MongoDB **database user** credentials, not your Atlas login.

### 4. Run the server

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

### ✅ Register a user

**POST** `/api/users/register`

Request body:

```json
{
  "name": "Aina",
  "matricNo": "B0123456",
  "role": "rider",
  "phone": "0123456789",
  "password": "secure123"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

## 🧠 Tech Stack

* **Node.js** & **Express**
* **MongoDB Atlas**
* **Mongoose**
* **dotenv**

---

## 🛠️ TODO / Future Improvements

* [ ] Password hashing (e.g. bcrypt)
* [ ] JWT authentication for login
* [ ] Add driver-rider matching logic
* [ ] Deploy to Render or Railway
* [ ] Swagger API docs

---

## 👩‍💻 Author

**Aina Inarah**
[GitHub](https://github.com/ainainarah97)

---

## 📝 License

This project is for academic purposes under the **Database Assignment** module.

