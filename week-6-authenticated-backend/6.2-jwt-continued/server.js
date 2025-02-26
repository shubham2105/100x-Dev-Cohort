require("dotenv").config();
const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// user array
const users = [];
// validations

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const signupSchema = z.object({
  username: z.string().min(1, "username cannot be empty"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .regex(
      passwordRegex,
      "password must contain atleast 1 uppercase letter and 1 special character"
    ),
});

const signinSchema = z.object({
  username: z.string().min(1, "username cannot be empty"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .regex(
      passwordRegex,
      "password must contain atleast 1 uppercase letter and 1 special character"
    ),
});

// routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/signup", (req, res) => {
  const parseResult = signupSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ errors: parseResult.error.errors });
  }
  const { username, password } = parseResult.data;
  if (users.find((user) => user.username === username)) {
    return res.json({ message: "You are already registered" });
  }
  const newUSer = { username, password };
  users.push(newUSer);
  res.json({
    message: "signup endpoint : signed up successfully",
  });
});

app.post("/signin", (req, res) => {
  const parseResult = signinSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ errors: parseResult.error.errors });
  }
  const { username, password } = parseResult.data;
  try {
    const findUsers = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!findUsers) {
      return res.status(404).json({
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY);
    return res.json({
      message: "Signin Successful",
      username: username,
      token: token,
    });
  } catch (error) {
    return res.status(403).json({
      message: "Please enter correct username and password",
    });
  }
});

// adding a auth middleware

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    return res.json({
      message: "You are not logged in",
    });
  }
}

app.get("/me", auth, (req, res) => {
  const token = req.headers.token;
  //   const decodedInformation = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const username = req.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    return res.status(400).json({
      message: "Unauthorized",
    });
  }
});

app.listen(3000);
