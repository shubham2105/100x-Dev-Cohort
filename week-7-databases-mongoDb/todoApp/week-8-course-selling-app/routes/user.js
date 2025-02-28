const { Router } = require("express");
require("dotenv").config();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const userRouter = Router();
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

// validations
const signupSchema = z.object({
  username: z.string().min(1, { message: "username cannot be empty" }),
  email: z.string().email({ message: "Invald email format" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .regex(passwordRegex, {
      message:
        "Password should contain at least one uppercase letter and one special character.",
    }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
});

// routes: login, signup, purchase a course, see course

userRouter.post("/signup", async (req, res) => {
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ errors: parsedData.error.errors });
  }
  const { username, email, password } = parsedData.data;
  try {
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new User
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error. Please try again later", error: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const parsedData = loginSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({ errors: parsedData.error.errors });
  }
  const { email, password } = parsedData.data;
  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY
    );
    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Server error, Please try again later", error: error });
  }
});

module.exports = userRouter;
