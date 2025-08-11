# Real Estate Marketing Website

## Overview

This project is a Real Estate Marketing Website that allows users to browse, filter, and view property listings securely. It includes both Admin and Client interfaces, with a strong focus on security using **bcrypt** for password hashing and **JWT** for secure session management.

---

## Features

- **Separate User Interfaces** for Admin and Client
- **Security & Authentication**:
  - Password hashing with bcrypt
  - Session management with JWT (JSON Web Tokens)
- **Property Management** (Admin interface):
  - Add new properties
  - Update existing property details
  - Delete properties (optional)
- **Client Interface**:
  - View list of properties
  - View detailed information for each property
  - Filter properties based on various criteria (price, location, size, etc.)

---

## Technologies

- Backend: **Node.js** with Express.js
- Frontend: **React**
- Database: **MongoDB**
- Security: bcrypt + JWT

---

## Installation and Running

### Backend

## 1. Navigate to the server folder:
   ```bash cd server`
## 2. Install dependencies:
npm install
## 3. Set environment variables (e.g., in .env file):
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
## 4.Start the server:
npm start
### Frontend
## 1. Navigate to the client folder:
cd client
## 2.Install dependencies:
npm install
## 3.Start the React application:
npm start
## 4.Open your browser at:
http://localhost:3000
Project Structure
bash
Copy
Edit
/server
  /controllers
  /models
  /routes
  /middleware
  server.js
/client
  /src
    /components
    /services
    /pages
    App.js
Security
Passwords are hashed with bcrypt before storing in the database.

User authentication uses JWT to protect sensitive routes.

Role-based access control (Admin / Client).

Usage
Users can register and log in.

Admins can add, update, and delete properties.

Clients can browse, filter, and view detailed property information.

## Contributions
Contributions and suggestions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or support: esty41655@gmail.com
