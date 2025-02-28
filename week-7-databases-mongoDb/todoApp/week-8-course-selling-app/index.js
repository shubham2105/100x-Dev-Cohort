require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());

// connecting to database
connectDB();

// importing routes
app.use("/user", userRouter);

app.listen(3000);
