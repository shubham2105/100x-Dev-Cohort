const express = require("express");
const port = 3001;
const app = express();

//using middleware
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});

app.use((err, req, res, next) => {
  res.json({
    message: "Sorry Something is up with our server. Please try again",
  });
});

app.listen(port);
