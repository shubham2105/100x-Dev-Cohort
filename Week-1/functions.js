// write function that finds sum of two numbers
// way 1
let addFunction = function (a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
};

addFunction(20, 20);

// different approach

function add(n1, n2, fnToCall) {
  let sum = n1 + n2;
  fnToCall(sum);
}

function displayData(data) {
  console.log("Addition of numbers is " + data);
}

add(35, 35, displayData);
