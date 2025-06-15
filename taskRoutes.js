const express = require("express");
const auth = require("./authMiddleware");
const multer = require("multer");
const path = require("path");
const { createTask, getTasks, updateTask, deleteTask, toggleTask } = require("./taskController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

const router = express.Router();
router.use(auth);
router.get("/", getTasks);
router.post("/", upload.single("file"), createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);
module.exports = router;

