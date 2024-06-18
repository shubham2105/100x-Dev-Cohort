const express = require("express");
const mongoose = require("mongoose");
const { number } = require("zod");
const port = 3001;
const app = express();

//middlwaare
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shubhamdhole215:41XlpVn57LzPNu7A@cluster0.fxfgtaf.mongodb.net/dbpractice"
);
const Student = mongoose.model("Students", {
  name: String,
  rollno: Number,
  grade: Number,
});

app.post("/studentRegister", async (req, res) => {
  const name = req.body.name;
  const rollno = req.body.rollno;
  const grade = req.body.grade;

  const existingStudent = await Student.findOne({ rollno: rollno });
  if (existingStudent) {
    return res.status(400).json({
      message: "Student with this rollno is already registered",
    });
  }
  const student = new Student({
    name: name,
    rollno: rollno,
    grade: grade,
  });
  student.save();
  res.json({
    message: "Student Registered Sucessfully",
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
