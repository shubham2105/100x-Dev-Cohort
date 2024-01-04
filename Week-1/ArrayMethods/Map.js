// map method

// given an array, give me back a new array in which every element is multiplied by 2

const numbers = [1, 2, 3, 4, 5];

let newarray = [];

// for (let i = 0; i < numbers.length; i++) {
//   newarray.push(numbers[i] * 2);
// }

// console.log(newarray);

// using map method
const array2 = [];

function mul(i) {
  return i * 2;
}

const x2 = numbers.map(mul);
console.log(x2);

const fullNames = [
  {
    fname: "sam",
    lname: "dam",
  },
  {
    fname: "sara",
    lname: "lara",
  },
];

// fullNames.map(getFullNames);

function getFullNames(item) {
  return [item.fname, item.lname].join(" ");
}

const realnames = fullNames.map(getFullNames);
console.log(realnames);

// another example
// given a original arrya and a transformation function. using map method, one can apply that transforamation function's logic to all the elements of the array
let num = [20, 40, 60];

function x3(i) {
  return i * 3;
}

let multiplieds = num.map(x3);
console.log(multiplieds);

//leetcode

const ogarray = [1, 2, 3];

function constant(i) {
  return 42;
}

let sol = ogarray.map(constant);
console.log(sol);

const numar = [1, 2, 3];
function fn(n, i) {
  return n + i;
}

let res = numar.map(fn);
console.log(res);

let arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
}

let val = arr.map(plusone);
console.log(val);

let names = ["max", "rex"];

function transform(item) {
  return item.toUpperCase();
}
let capNames = names.map(transform);
console.log(capNames);

const info = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

function namesOnly(item) {
  return ([] = item.name);
}

let onlynames = info.map(namesOnly);
console.log(onlynames);

function goMatrix(item) {
  if (item.age >= 18) {
    return item.name + "can go the matrix";
  } else {
    return item.name + " is under age";
  }
}

let matrixGo = info.map(goMatrix);
console.log(matrixGo);
