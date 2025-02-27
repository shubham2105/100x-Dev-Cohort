const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
mongoose.connect(process.env.MONGODB_URL);
const app = express();
app.use(express.json());

// middleware;
function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

// routes

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    message: "You are now signed up",
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY
    );
    res.json({
      message: "Login successful",
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const { title, done } = req.body;

  await TodoModel.create({
    userId,
    title,
    done,
  });
  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId,
  });
  res.json({
    todos,
  });
});
app.listen(3000);
