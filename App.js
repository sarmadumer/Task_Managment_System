let token = "";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  token = data.token;
  loadTasks();
}

async function loadTasks() {
  const status = document.getElementById("statusFilter").value;
  const priority = document.getElementById("priorityFilter").value;
  const query = new URLSearchParams();
  if (status) query.append("status", status);
  if (priority) query.append("priority", priority);
  const res = await fetch(`http://localhost:5000/api/tasks?${query.toString()}`, {
    headers: { Authorization: token },
  });
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `${task.title} (${task.priority}) - ${task.completed ? "✅" : "❌"}
      <button onclick="toggleTask('${task._id}')">Toggle</button>
      <button onclick="deleteTask('${task._id}')">Delete</button>`;
    if (task.file) {
      const link = document.createElement("a");
      link.href = `http://localhost:5000/uploads/${task.file}`;
      link.innerText = "📎 File";
      link.target = "_blank";
      li.appendChild(link);
    }
    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const file = document.getElementById("fileInput").files[0];
  const formData = new FormData();
  formData.append("title", title);
  formData.append("priority", priority);
  if (file) formData.append("file", file);

  await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { Authorization: token },
    body: formData,
  });
  loadTasks();
}

async function toggleTask(id) {
  await fetch(`http://localhost:5000/api/tasks/${id}/toggle`, {
    method: "PATCH",
    headers: { Authorization: token },
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
  loadTasks();
}

// ✅ End of Full System Implementation
