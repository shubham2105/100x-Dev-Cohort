const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//endpoints

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.listen(port, () => {
  console.log(`Calculator Server Listening on port ${port}`);
});
