// what are closure?

/* A closure is a combination of function budnled togetegr (enclosed) with refernces to
to its surrrounding state(the lexical environment).*/

function main() {
  let name = "Shubham Dhole";

  function sayMyName() {
    console.log(name);
  }

  sayMyName();
}

main();

// Another example of a closure
function adder(num1) {
  function add(num2) {
    console.log(num1 + num2);
  }
  return add;
}

let addition = adder(20);

addition(5);
