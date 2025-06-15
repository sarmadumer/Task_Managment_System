````markdown
# 🗂️ Task Management Application with Authentication

A full-stack task management system that allows users to register, login, and manage personal tasks with features like file upload, filtering by status and priority, and secure user authentication.

---

## 🚀 Features

- ✅ User Registration and Login with JWT Authentication
- ✅ Create, Read, Update, Delete (CRUD) for tasks
- ✅ Task fields: Title, Description, Due Date, Priority
- ✅ Toggle task completion (✅/❌)
- ✅ Upload and download files for tasks
- ✅ Filter tasks by completion status and priority
- ✅ Responsive UI built with HTML/CSS/JS
- ✅ Simple and clean folder structure (single directory)

---

## 🧰 Technologies Used

### 💻 Frontend
- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt.js for password hashing
- Multer for file upload
- dotenv for environment config
- cors for cross-origin support

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret
```

### 4. Start MongoDB Server

Make sure MongoDB is installed and running locally:

```bash
mongod
```

### 5. Start the Application

```bash
node server.js
```

---

## 📁 Folder Structure

```
T_M_Software/
├── server.js
├── .env
├── App.js
├── index.html
├── style.css
├── Task.js
├── User.js
├── taskRoutes.js
├── taskController.js
├── authRoutes.js
├── authController.js
├── authMiddleware.js
├── uploads/         # For storing uploaded files
└── README.md
```

---

## 📬 API Endpoints

| Method | Endpoint                | Description             |
| ------ | ----------------------- | ----------------------- |
| POST   | `/api/auth/register`    | Register new user       |
| POST   | `/api/auth/login`       | Login and receive token |
| GET    | `/api/auth/profile`     | Get authenticated user  |
| GET    | `/api/tasks`            | Get all user tasks      |
| POST   | `/api/tasks`            | Create a new task       |
| PUT    | `/api/tasks/:id`        | Update task             |
| DELETE | `/api/tasks/:id`        | Delete task             |
| PATCH  | `/api/tasks/:id/toggle` | Toggle task completion  |

---

## 📸 Screenshots

*(You can add screenshots here showing login page, task list, file upload, etc.)*

---

## 🧑‍💻 Author

**Sarmad Umer**
BS Computer Science | FAST NUCES
Email: `sarmadumer92@gmail.com`

```

---

Would you like me to:
- Save this as a file?
- Include your GitHub repo link in the header?
- Add images/screenshots with markdown syntax?

Let me know!
```
