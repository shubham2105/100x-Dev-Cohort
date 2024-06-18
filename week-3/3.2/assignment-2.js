const express = require("express");
const mongoose = require("mongoose");
const port = 3001;
const app = express();

//middlware
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shubhamdhole215:41XlpVn57LzPNu7A@cluster0.fxfgtaf.mongodb.net/userapp"
);
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(404).send({
      message: "Username already exists",
    });
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({
    message: "User created successfully",
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
