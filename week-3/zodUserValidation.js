const express = require("express");
const zod = require("zod");
const port = 3001;
const app = express();

app.use(express.json());

const userSchema = zod.object({
  username: zod.string({ message: "Invalid Inputs" }),
  email: zod.string().email({ message: "Invalid email address" }),
  password: zod
    .string()
    .min(8, { message: "Must be at least 8 characters long" }),
});

app.post("/user-info", (req, res) => {
  try {
    userSchema.parse(req.body);
    res.send("Welcome to Server");
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
