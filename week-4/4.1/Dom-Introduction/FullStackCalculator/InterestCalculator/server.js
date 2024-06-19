const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//endpoints

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const SimpleInterest = (principal * rate * time) / 100;
  res.send(SimpleInterest.toString());
});

app.listen(port, (req, res) => {
  console.log(`SimpleInterest Calculator listening on port ${port}`);
});
