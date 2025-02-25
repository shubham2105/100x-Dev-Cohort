const express = require("express");
const port = 3000;
const app = express();

//middlewares

app.use(express.json());

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      message: "Sorry you are not of age",
    });
  }
}

// app.use(isOldEnoughMiddleware);

//routes

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    message: "You have sucessfully ridden the ride1",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
