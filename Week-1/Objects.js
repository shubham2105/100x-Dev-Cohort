// creating array of object
const allUsers = [
  {
    fname: "shubham",
    gender: "male",
    address: "123 Main st",
    country: "India",
  },
  {
    fname: "harkirat",
    gender: "male",
    country: "India",
  },
  {
    fname: "priya",
    gender: "female",
    country: "India",
  },
  {
    name: "sam",
    gender: "male",
    country: "United States",
  },
];

// to get all the user who are male
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["fname"]);
  }
}

//to get all the users who reside who in India
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["country"] == "India") {
    console.log(allUsers[i]["fname"]);
  }
}
