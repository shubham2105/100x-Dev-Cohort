const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, TodoModel } = require("./db");
mongoose.connect(process.env.MONGODB_URL);
const app = express();
app.use(express.json());

// zod validations

const signupSchema = z.object({
  name: z
    .string()
    .min(1, "name canoot be empty")
    .max(100, "name cannot be more than 100 characters"),
  email: z
    .string()
    .min(1, "email id field cannot be empty")
    .email("enter valid email address")
    .max(100, "email id cannot be more than 100 characters"),
});

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
  // const parsedData = signupSchema.parse(req.body);
  const parsedDataWithSucess = signupSchema.safeParse(req.body);
  if (!parsedDataWithSucess.success) {
    res.json({
      errors: parsedDataWithSucess.error.errors,
    });
  }
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
    res.json({
      message: "You are now signed up",
    });
  } catch (error) {
    return res.json({
      message: "User already exists",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await UserModel.findOne({
    email: email,
  });
  if (!response) {
    return res.status(403).json({
      message: "user does not exist",
    });
  }
  const passwordMatch = await bcrypt.compare(password, response.password);
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id,
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
