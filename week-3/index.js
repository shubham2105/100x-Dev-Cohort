// this is dumb way of doing user and input validation

const express = require("express");
const port = 3002;

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "shubham" || password != "pass") {
    res.status(404).json({
      message: "Invalid Inputs",
    });
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
  res.json({
    message: "Your kidneys are fine",
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
