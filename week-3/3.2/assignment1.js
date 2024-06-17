const express = require("express");
const jwt = require("jsonwebtoken");
const port = 3001;
const app = express();
const jwtPassword = "Rex123";
app.use(express.json());
//Dummy data of users

const allUsers = [
  {
    username: "shubhamdhole@gmail.com",
    password: "shubham123",
    name: "Shubham Dhole",
  },
  {
    username: "sarajohnson@gmail.com",
    password: "sara123",
    name: "Sara Johsnon",
  },
  {
    username: "johndoe@gmail.com",
    password: "john123",
    name: "John Doe",
  },
];

function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username == username && allUsers[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      message: "User does not exists",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users: allUsers.filter(function (value) {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      message: "Invalid Token",
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
