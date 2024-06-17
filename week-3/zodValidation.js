const express = require("express");
const port = 3001;
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      message: "Invalid inputs",
    });
  }
  res.json({
    response,
  });
});

app.listen(port);
