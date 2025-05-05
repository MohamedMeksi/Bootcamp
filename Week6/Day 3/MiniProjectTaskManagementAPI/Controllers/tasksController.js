const fs = require("fs").promises;

const readTasks = async () => {
  try {
    const tasks = await fs.readFile("./Data/tasks.json", "utf-8");
    return JSON.parse(tasks);
  } catch (error) {
    console.error("Error reading tasks:", error);
    return [];
  }
};

const writeTasks = async (tasks) => {
  try {
    await fs.writeFile("./Data/tasks.json", JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing tasks:", error);
  }
};

exports.getAllTasks = async (req, res) => {
  const tasks = await readTasks();
  if (tasks.length === 0) {
    return res.status(404).json({ message: "No tasks found" });
  }
  res.json(tasks);
};

exports.getTaskById = async (req, res) => {
  const tasks = await readTasks();
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

exports.createTask = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }
  const tasks = await readTasks();
  const newTask = {
    id: tasks.length + 1,
    ...req.body,
  };
  tasks.push(newTask);
  await writeTasks(tasks);
  res.status(201).json(newTask);
};

exports.updateTask = async (req, res) => {
  const tasks = await readTasks();
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  // await fs.writeFile("./Data/tasks.json", JSON.stringify(tasks, null, 2));
  writeTasks(tasks);
  res.json(tasks[taskIndex]);
};

exports.deleteTask = async (req, res) => {
  const tasks = await readTasks();
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  return res.status(204).json({ message: "Task deleted successfully" });
};
