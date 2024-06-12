const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3002;

app.use(express.json());

// File to store todos
const TODOS_FILE = path.join(__dirname, "todos.json");

// Function to read todos from file
const readTodos = () => {
  if (!fs.existsSync(TODOS_FILE)) {
    console.log("Todos file does not exist, returning empty array.");
    return [];
  }
  const data = fs.readFileSync(TODOS_FILE);
  console.log("Todos read from file:", data.toString());
  return JSON.parse(data);
};

// Function to write todos to file
const writeTodos = (todos) => {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
  console.log("Todos written to file:", JSON.stringify(todos, null, 2));
};

// Get all todos
app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  writeTodos(todos);
  console.log("New todo added:", newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const todos = readTodos();
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    console.log("Todo not found with id:", req.params.id);
    return res.status(404).json({ error: "Todo not found" });
  }
  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  writeTodos(todos);
  console.log("Todo updated:", todos[todoIndex]);
  res.json(todos[todoIndex]);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const todos = readTodos();
  const updatedTodos = todos.filter(
    (todo) => todo.id !== parseInt(req.params.id)
  );
  writeTodos(updatedTodos);
  console.log("Todo deleted with id:", req.params.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
