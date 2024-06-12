const express = require("express");
const port = 3001;
const app = express();
app.use(express.json());

app.get("/route-handler", (req, res) => {
  res.json({
    name: "Shubham",
    Age: 21,
  });
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/post-req", (req, res) => {
  console.log(req.headers["auth"]);
  console.log(req.body);
  res.send("This is a POST request");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
