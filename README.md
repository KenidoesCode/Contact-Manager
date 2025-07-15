# ContactManager App

## Overview
ContactManager App is a MERN stack application designed to help users manage their contacts efficiently. This project was created as a learning exercise following a YouTube tutorial to understand how routers work in a full-stack JavaScript environment. The app allows users to register, log in, and perform CRUD operations on their contacts securely.

## Project Structure
```
mycontacts-backend/
│
├── config/
│   └── dbConnection.js          # Database connection setup
│
├── controllers/
│   ├── contactController.js     # Business logic for contact operations
│   └── userController.js        # Business logic for user authentication and management
│
├── middleware/
│   ├── errorHandler.js          # Custom error handling middleware
│   └── ValidateTokenHandler.js  # Middleware to validate JWT tokens
│
├── models/
│   ├── contactModel.js          # Mongoose schema for contacts
│   └── userModel.js             # Mongoose schema for users
│
├── routes/
│   ├── contactRoutes.js         # Routes for contact-related API endpoints
│   └── userRoutes.js            # Routes for user authentication API endpoints
│
├── .gitignore                   # Git ignore file
├── constants.js                 # Project constants (if any)
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Dependency lock file
├── server.js                   # Express server setup and route configuration
└── README.md                   # Project documentation
```

## Key Features
- User registration and login with JWT-based authentication
- Secure password hashing using bcrypt
- CRUD operations for managing contacts (Create, Read, Update, Delete)
- Protected routes to ensure users can only access their own contacts
- Custom error handling middleware for better API responses

## Tech Stack
- **MongoDB**: NoSQL database for storing user and contact data
- **Express.js**: Backend web framework for building RESTful APIs
- **Node.js**: JavaScript runtime environment
- **Mongoose**: ODM for MongoDB to model application data
- **bcrypt**: Library for hashing passwords
- **jsonwebtoken**: For generating and verifying JWT tokens
- **dotenv**: For managing environment variables

## Project Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mycontacts-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   ACCESS_TOKEN_SECRET=<your_jwt_secret>
   ```

4. **Run the server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000`.

5. **API Endpoints**

   - `POST /api/users/register` - Register a new user
   - `POST /api/users/login` - Login and receive a JWT token
   - `GET /api/users/current` - Get current logged-in user info (requires token)
   - `GET /api/contacts` - Get all contacts for the logged-in user
   - `POST /api/contacts` - Create a new contact
   - `GET /api/contacts/:id` - Get a specific contact by ID
   - `PUT /api/contacts/:id` - Update a contact by ID
   - `DELETE /api/contacts/:id` - Delete a contact by ID

## Future Enhancements
- Add frontend React application to provide a user-friendly interface
- Implement refresh tokens for improved authentication flow
- Add pagination and search functionality for contacts
- Implement user profile management features
- Add unit and integration tests for backend APIs
- Improve error handling and validation with more detailed responses

---

This project serves as a foundational MERN stack application to learn routing, authentication, and CRUD operations. Contributions and improvements are welcome!
