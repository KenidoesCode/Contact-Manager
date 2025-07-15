
##📇 ContactManager App
 
**ContactManager** is a simple yet powerful **MERN stack** application that helps users manage their contacts efficiently.  
🚀 Built while following a YouTube tutorial, this project helped me learn how **routing, authentication, and CRUD operations** work in a real-world Node + Mongo backend — as someone who already knows React!

---

## 🗂️ Project Structure

```

mycontacts-backend/
│
├── config/
│   └── dbConnection.js          # MongoDB connection setup
│
├── controllers/
│   ├── contactController.js     # Contact operations logic
│   └── userController.js        # User auth logic
│
├── middleware/
│   ├── errorHandler.js          # Custom error middleware
│   └── validateTokenHandler.js  # JWT token validation
│
├── models/
│   ├── contactModel.js          # Mongoose contact schema
│   └── userModel.js             # Mongoose user schema
│
├── routes/
│   ├── contactRoutes.js         # Contact routes
│   └── userRoutes.js            # Auth routes
│
├── .gitignore
├── constants.js
├── package.json
├── server.js                   # App entry point
└── README.md

````

---

## ✨ Key Features
- 🔐 **JWT-based authentication**
- 🔑 **Secure password hashing** with bcrypt
- 📇 **Create, Read, Update, Delete (CRUD)** for contacts
- 🔒 **Protected routes** so users only access their own data
- ⚠️ **Custom error handling** for clean API responses

---

## 🛠️ Tech Stack

| Tool            | Role                                      |
|-----------------|-------------------------------------------|
| 🟢 Node.js       | Backend runtime                           |
| ⚙️ Express.js    | REST API framework                        |
| 🍃 MongoDB       | NoSQL database                            |
| 📦 Mongoose      | MongoDB ODM                               |
| 🔑 bcrypt        | Password hashing                         |
| 🔐 jsonwebtoken  | Auth token generation & validation        |
| 📁 dotenv        | Environment variable management           |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo
```bash
git clone <repository-url>
cd mycontacts-backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
ACCESS_TOKEN_SECRET=<your_jwt_secret>
```

### 4️⃣ Run the Server

```bash
npm start
```

📍 Server will be live at: `http://localhost:5000`

---

## 📡 API Endpoints

### 🔐 Auth Routes:

* `POST /api/users/register` → Register a new user
* `POST /api/users/login` → Login & receive JWT
* `GET /api/users/current` → Get current user (protected)

### 📇 Contact Routes:

* `GET /api/contacts` → Get all contacts for logged-in user
* `POST /api/contacts` → Create new contact
* `GET /api/contacts/:id` → Get contact by ID
* `PUT /api/contacts/:id` → Update contact
* `DELETE /api/contacts/:id` → Delete contact

---

## 🌱 Future Enhancements

* 💻 Frontend with React UI (coming soon!)
* 🔄 Refresh token implementation
* 🔍 Pagination & search for large contact lists
* 👤 User profile management
* 🧪 Unit & integration tests
* 🚫 Improved error responses with validation

---

## 🎯 Why This Project?

> I followed a YouTube tutorial to get hands-on experience with backend development as a React developer. This helped me understand backend routing, REST APIs, JWT authentication, and working with MongoDB — all through practical application. 🙌

---

🧠 **Learning by doing** is the best way — and this project was my first real step into backend development!
👋 Contributions and feedback are always welcome. Fork, star ⭐, and play around with the code!

```

---

✅ You can now **copy this entire block** into your `README.md` file — no missing pieces. Let me know if you want to turn this into a full MERN app with the React frontend next!
```


