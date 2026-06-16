# Production Ready Authentication System

A complete Production-Grade Authentication System built using Node.js, Express.js, MongoDB, and JWT.

This project demonstrates how modern backend applications implement secure authentication using:

* Access Tokens
* Refresh Tokens
* Token Rotation
* Session Management
* OTP Authentication
* Logout from All Devices

---

# Features

* User Registration & Login
* JWT Authentication
* Access Token & Refresh Token Flow
* Refresh Token Rotation
* Session Management
* Logout from Current Device
* Logout from All Devices
* OTP-Based Authentication
* Secure Authentication Architecture
* MongoDB Integration

---

# Tech Stack

| Technology | Usage             |
| ---------- | ----------------- |
| Node.js    | Backend Runtime   |
| Express.js | Server Framework  |
| MongoDB    | Database          |
| JWT        | Authentication    |
| bcrypt     | Password Hashing  |
| Nodemailer | OTP Email Service |

---

# Project Structure

```bash id="t8z2vq"
project/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── config/
├── app.js
├── server.js
└── package.json
```

---

# Installation

## 1. Clone the Repository

```bash id="8t4sz4"
git clone https://github.com/your-username/your-repo-name.git
```

## 2. Navigate to Project Folder

```bash id="4f7nl9"
cd your-repo-name
```

## 3. Install Dependencies

```bash id="9e8u9j"
npm install
```

## 4. Setup Environment Variables

Create a `.env` file in the root directory.

```env id="j1c0m9"
PORT=5000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

# Run the Project

## Development Mode

```bash id="9h0u3z"
npm run dev
```

## Production Mode

```bash id="t5n1c6"
npm start
```

---

# Authentication Flow

## Access Token

* Short-lived token
* Used to access protected routes
* Sent in Authorization Header

## Refresh Token

* Long-lived token
* Used to generate new access tokens
* Stored securely

## Token Rotation

Whenever a refresh token is used:

1. Old refresh token becomes invalid
2. New refresh token is issued
3. Prevents token replay attacks

---

# API Features

## User Authentication

* Register User
* Login User
* Logout User
* Logout From All Devices

## Token Management

* Generate Access Token
* Generate Refresh Token
* Refresh Access Token

## OTP Authentication

* Send OTP
* Verify OTP

---

# Security Features

* Password Hashing using bcrypt
* JWT Authentication
* Secure Session Handling
* Refresh Token Rotation
* Protected Routes Middleware
* OTP Verification
* Multi-Device Session Control
