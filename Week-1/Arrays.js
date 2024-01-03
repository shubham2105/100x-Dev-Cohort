// print all the even ages fro=m and array fo age groups
const ageArray = [21, , 22, 23, 24, 25, 26, 27, 28, 29, 30];
const oddAge = [];
const evenAge = [];

for (let i = 0; i < ageArray.length; i++) {
  if (ageArray[i] % 2 == 0) {
    evenAge.push(ageArray[i]);
  }
}
console.log("Even ages amongst the age array are " + evenAge.join(" ,"));

// similarly for the odd age

for (let i = 0; i < ageArray.length; i++) {
  if (ageArray[i] % 2 == 1) {
    oddAge.push(ageArray[i]);
  }
}
console.log(
  "Odd ages amongst the age array are " +
    oddAge.length +
    " and their names are " +
    oddAge.join(" ,")
);

// write the program to find the biggest number from an array

const numberArray = [1, 20, 30, 50, 70];
let largestNumber = Math.max(...numberArray);
console.log("largest number is " + largestNumber);

// write a porgram to print the first name fo male members given a complex object

const nameArray = ["shubham", "harkirat", "priya"];
const genderArray = ["male", "male", "female"];
const maleMembersArray = [];
const femaleMembersArray = [];
const numberOfUSers = nameArray.length;

for (let i = 0; i <= nameArray.length; i++) {
  if (genderArray[i] === "male") {
    maleMembersArray.push(nameArray[i]);
  } else if (genderArray[i] === "female") {
    femaleMembersArray.push(nameArray[i]);
  }
}

console.log("Number of members in array are : " + numberOfUSers);

console.log(
  "Male members amongst the nameArray are as follws:" +
    maleMembersArray.join(" ,")
);

console.log(
  "Female members amongst the nameArry are as follows: " +
    femaleMembersArray.join(" ,")
);

// write a program to reverse all the elements of an array

let exampleArray = ["My", "name", "is", "khan"];
console.log(exampleArray.reverse()); // using reverse method

// exploring the array methods

const persons = [
  {
    firstname: "John",
    lastname: "Reynlods",
  },
  {
    firstname: "Kaylee",
    lastname: "Frye",
  },
  {
    firstname: "Jayne",
    lastname: "Cobb",
  },
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(getFullName(persons));

// another example of array.map() method

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(myFn);

function myFn(n1) {
  return n1 * 10;
}
