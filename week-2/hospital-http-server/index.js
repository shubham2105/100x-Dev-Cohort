const express = require("express");
const port = 3002;
const app = express();

const patients = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

//middleware
app.use(express.json());

//admin can check how many kidneys patients have and their health
app.get("/", (req, res) => {
  const patientKidneys = patients[0].kidneys;
  const numberofKidneys = patientKidneys.length;
  let HealthyKidneys = 0;
  for (let i = 0; i < numberofKidneys; i++) {
    if (patientKidneys[i].healthy) {
      HealthyKidneys = HealthyKidneys + 1;
    }
  }
  const unHealthyKidneys = numberofKidneys - HealthyKidneys;
  res.json({
    numberofKidneys,
    HealthyKidneys,
    unHealthyKidneys,
  });
});

// // admin can add number of heealthy kidneys
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  patients[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Added",
  });
});

//make all kidneys healty

app.put("/", (req, res) => {
  for (let i = 0; i < patients[0].kidneys.length; i++) {
    patients[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// removing all unhealthy kidneys
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < patients[0].kidneys.length; i++) {
    if (patients[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  patients[0].kidneys = newKidneys;
  res.json({ msg: "done" });
});

app.listen(port, () => {
  console.log(`Hospital Server listening on ${port}`);
});
