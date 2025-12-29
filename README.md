#  Vacation Apartments Marketing Platform

A full-stack **Node.js** application for publishing, managing, and searching vacation apartments.  
The system includes secure authentication, authorization, advanced filtering, and real-time weather integration.

This project was developed as a **final project** and demonstrates backend architecture, business logic and security practices.

---

##  Table of Contents
- Overview
- Key Features
- Data Models
- API Capabilities
- Technologies Used
- Installation & Setup
- Authorization Rules
- Project Structure
- What This Project Demonstrates
- License
- Contribution

---

##  Overview

The platform allows **publishers** to register, log in, and manage vacation apartment listings.  
Apartments can be searched and filtered by city, category, price, and number of beds, while enriching responses with publisher contact details.

---

##  Key Features

###  Publisher Management
- Registration with **unique email validation**
- Secure login using **JWT authentication**
- Passwords encrypted with **bcrypt**
- Each publisher can manage **only their own apartments**

###  Cities & Categories
- Add new cities *(authorized publishers only)*
- Retrieve all cities
- Retrieve **current weather** by city code
- Add and retrieve apartment categories (e.g. Zimmer, Vacation Apartment, Rental Unit)

### 🏠 Apartment Management (CRUD)
Authorized publishers can:
- Add apartments
- Update apartments they own
- Delete apartments they own

Each apartment includes:
- Name (optional)
- Description
- Image
- Address
- City reference
- Category reference
- Number of beds
- Extras
- Price
- Publisher contact details

---

##  Data Models

### Publisher
- Email (unique)
- Password (encrypted)
- Phone
- Optional additional phone
- Apartments array

### City
- City name
- Apartments array

### Category
- Category name
- Apartments array

### Apartment
- Name (optional)
- Description
- Image
- City code
- Category code
- Address
- Number of beds
- Extras
- Price
- Publisher code

---

##  API Capabilities & Queries

### Apartments Retrieval
- Get all apartments
- Get apartments by category code
- Get apartments by city code
- Get apartments by number of beds:
  - Greater than
  - Less than
  - Equal to
- Get apartments by price:
  - Greater than
  - Less than
- Get apartments by publisher code *(authorized only)*

📎 Each apartment response includes:
- City name
- Category name
- Publisher contact details (email & phone)

---

##  Technologies Used

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Security**
- JWT (Authentication & Authorization)
- bcrypt (Password encryption)

**External APIs**
- Weather API (real-time city weather)

**Tools**
- Git & GitHub
- RESTful API architecture

---

##  Installation & Setup

```bash
git clone https://github.com/Ester-Carlebach/Apartment-marketing-website.git
cd Apartment-marketing-website
npm install
npm start
```
## Authorization Rules
Only authenticated publishers can:

Add cities

Add categories

Add apartments

Update or delete apartments

Publishers can only update or delete apartments they own

All protected routes require valid JWT authentication

##  Project Structure
├── models        # MongoDB schemas
├── routes        # API routes
├── controllers   # Business logic
├── middleware    # Authentication & authorization
├── services      # External API integrations
└── app.js

## What This Project Demonstrates

Secure authentication and authorization flows

Proper password handling and encryption

Complex data relationships in MongoDB

Clean separation of concerns

Business-oriented API design

Real-world backend system thinking
## License

This project was created for educational purposes.

## Contribution

Pull requests are welcome.
For significant changes, please open an issue to discuss the proposal first.
