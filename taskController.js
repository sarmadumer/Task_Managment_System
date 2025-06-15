const Task = require("./Task");
exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.userId,
    file: req.file ? req.file.filename : null
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { status, priority } = req.query;
  let filter = { user: req.userId };
  if (status === "completed") filter.completed = true;
  else if (status === "pending") filter.completed = false;
  if (priority) filter.priority = priority;
  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: "Deleted" });
};

exports.toggleTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.userId });
  task.completed = !task.completed;
  await task.save();
  res.json(task);
};