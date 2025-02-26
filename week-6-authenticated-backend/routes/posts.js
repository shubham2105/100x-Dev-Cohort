const express = require("express");
// const dotenv = require("dotenv");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const z = require("zod");

const postsRouter = Router();

// validation Schemas
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const signupSchema = z.object({
  username: z.string().min(1, "username cannot be empty"),
  password: z
    .string()
    .min(8, "password should be at least 8 characters")
    .regex(
      passwordRegex,
      "password must contain atleadt 1 uppercase letter and 1 special chracters"
    ),
});

const signinSchema = z.object({
  username: z.string().min(1, "username cannot be empty"),
  password: z
    .string()
    .min(8, "password should be at least 8 characters")
    .regex(
      passwordRegex,
      "password must contain atleast 1 uppercase letter and 1 special chracters"
    ),
});

// users array
const users = [];

// replacing custom gegnerateToken with jwt based token

// function generatetoken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }
postsRouter.post("/signup", (req, res) => {
  const parseResult = signupSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }
  const { username, password } = parseResult.data;
  if (users.find((user) => user.username === username)) {
    return res.status(403).json({
      message: "You are already registered",
    });
  }
  const newUser = { username, password };
  users.push(newUser);

  res.json({
    message: "signup endpoint",
    username,
  });
  console.log(users);
});

postsRouter.post("/signin", (req, res) => {
  const parseResult = signinSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }
  const { username, password } = parseResult.data;
  try {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) {
      return res.status(404).json({
        message: "Invalid username or password",
      });
    }
    const token = jwt.sign(
      {
        username: username,
      },
      process.env.JWT_SECRET_KEY
    );
    // user.token = token;
    return res.json({
      message: "Signin successful",
      username,
      token: token,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

postsRouter.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const username = decodedInformation.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    res.status(404).json({
      message: "Unauthorized",
    });
  }
});

module.exports = {
  postsRouter: postsRouter,
};
