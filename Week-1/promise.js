const fs = require("fs");

function myReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

myReadFile().then(onDone);

function shubhamsAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });
  return p;
}

function main() {
  shubhamsAsyncFunction().then(function (value) {
    console.log(value);
  });
}
main();
