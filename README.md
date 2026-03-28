# 🪣 Bucketodo

A simple and clean full-stack web app to track your **bucket list** and **daily todos** — built with Node.js, Express, EJS and MySQL.

---

## ✨ Features

- ➕ Add new wishes
- ✅ Mark wishes as done
- ✏️ Edit existing wishes
- 🗑️ Delete wishes
- 🔐 Secure environment variable configuration

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, EJS |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Other | Method-Override, Dotenv |

---

## ⚙️ Getting Started

### 1 — Clone the repo
```bash
git clone https://github.com/VTharakaRam/bucketodo.git
cd bucketodo
```

### 2 — Install dependencies
```bash
npm install
```

### 3 — Create `.env` file in root folder
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=bucketodo_db
PORT=8080
```

### 4 — Setup MySQL database
```sql
CREATE DATABASE bucketodo_db;

USE bucketodo_db;

CREATE TABLE wishes (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  is_done    BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5 — Run the app
```bash
node index.js
```

### 6 — Open in browser
```
http://localhost:8080
```

---

## 🔗 API Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Show all wishes |
| GET | `/add` | Show add form |
| POST | `/add` | Add a new wish |
| GET | `/done/:id` | Mark wish as done |
| GET | `/edit/:id` | Show edit form |
| PATCH | `/edit/:id` | Update a wish |
| DELETE | `/wishes/:id` | Delete a wish |

---

## 👨‍💻 Author

**V Tharaka Ram** — [GitHub](https://github.com/VTharakaRam)
