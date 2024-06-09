const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [];

// Endpoint to retrieve all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Endpoint to create a new task
app.post("/tasks", (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.dueDate) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Endpoint to retrieve a task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// Endpoint to update a task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.title = req.body.title;
  task.description = req.body.description;
  task.dueDate = req.body.dueDate;
  res.json(task);
});

// Endpoint to delete a task
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1)
    return res.status(404).json({ error: "Task not found" });

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
