const express = require("express");
const port = 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
