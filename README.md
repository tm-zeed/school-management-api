# school-management-api

A Node.js + Express.js + MySQL/TiDB based API system to manage schools.

## Features

- Add new schools
- Get schools sorted by distance
- Input validation
- MySQL/TiDB database integration
- MVC architecture

---

# Tech Stack

- Node.js
- Express.js
- MySQL / TiDB
- Postman

---

# Project Structure

```bash
school-management-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=5000

DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=test
DB_PORT=4000
```

## Run Server

```bash
npm run dev
```

---

# API Endpoints

## Add School

### Endpoint

```http
POST /api/addSchool
```

### Request Body

```json
{
  "name": "Delhi Public School",
  "address": "Noida Sector 62",
  "latitude": 28.6280,
  "longitude": 77.3649
}
```

### Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

# List Schools

### Endpoint

```http
GET /api/listSchools?latitude=28.6139&longitude=77.2090
```

### Response

```json
{
  "success": true,
  "count": 3,
  "schools": []
}
```

---

# Postman Collection

Add your Postman collection link here.

---

# Author

Tamzeed Ahmed
