# 🏥 Doctors Appointment System

A full-stack web application for booking doctor appointments online, built with React, Node.js, Express, and MongoDB.

## 🔗 Repository
[GitHub - Doctors-Appointment-System](https://github.com/abdullah2161008/Doctors-Appointment-System)

---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- 🍪 Cookie-based secure session management (JWT + httpOnly cookies)
- 📅 Book Appointments with preferred doctor, date, and time
- 📋 View your own appointments (My Appointments)
- 🏥 Browse Services and Doctors
- 📱 Fully Responsive Design (Bootstrap)
- 🔔 Toast Notifications for user feedback
- 🛡️ Protected Routes (only logged-in users can book)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| React.js | UI Framework |
| React Router DOM | Client-side Routing |
| Bootstrap | Styling & Responsiveness |
| React Toastify | Notifications |
| Font Awesome | Icons |

### Backend
| Technology | Usage |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| cookie-parser | Cookie Management |
| cors | Cross-Origin Requests |

---

## 📁 Project Structure

```
Doctors-Appointment-System/
├── Backend/
│   └── src/
│       ├── models/
│       │   ├── user.js
│       │   └── appointment.js
│       ├── routes/
│       │   ├── user.js
│       │   └── appointment.js
│       ├── middleware/
│       │   └── verifyToken.js
│       ├── utils/
│       │   └── ExpressError.js
│       └── app.js
│
├── Frontend/
│   └── src/
│       ├── Components/
│       │   ├── Appointment/
│       │   ├── Home/
│       │   ├── Doctors/
│       │   ├── Services/
│       │   ├── Contact/
│       │   └── Login/
│       ├── App.jsx
│       └── main.jsx
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone https://github.com/abdullah2161008/Doctors-Appointment-System.git
cd Doctors-Appointment-System
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create `.env` file in Backend folder:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=8080
JWT_SECRET=your_secret_key
```

Start backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 API Endpoints

### Auth Routes (`/api/auth`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/signup` | Register new user |
| POST | `/login` | Login user |
| POST | `/logout` | Logout user |
| GET | `/check` | Check auth status |

### Appointment Routes (`/api/appointments`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/submit` | Book appointment | ✅ Yes |
| GET | `/my-appointments` | Get user appointments | ✅ Yes |

---

## 📸 Pages

- **Home** — Landing page with hospital info
- **Services** — Available medical services
- **Doctors** — Meet our doctors
- **Book Appointment** — Book a new appointment
- **My Appointments** — View your booked appointments
- **Login / Signup** — Authentication pages

---

## 👨‍💻 Author

**Abdullah Khan**
- GitHub: [@abdullah2161008](https://github.com/abdullah2161008)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
