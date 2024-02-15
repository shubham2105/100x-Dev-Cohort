// callback syntax
function shubhamsAsyncFunction(callback) {
  callback("hi there from a callabck");
}

async function main1() {
  shubhamsAsyncFunction(function (value) {
    console.log(value);
  });
}

main1();

// promiused function

function shubhamsPromisedFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there from a promise");
  });
  return p;
}

function main2() {
  shubhamsPromisedFunction().then(function (value) {
    console.log(value);
  });
}

main2();

// async await function

function shubhamsAsyncAwaitFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there from a async await function");
  });
  return p;
}

async function main3() {
  const value = await shubhamsAsyncAwaitFunction();
  console.log(value);
}
main3();
