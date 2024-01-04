// length
function getLenght(str) {
  console.log("Original String:", str);
  console.log("Lenght:", str.length);
}

getLenght("Shubham");

// index
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index", str.indexOf(target));
}

findIndexOf("Shubham Dhole", "Dhole");

// incase of multiple targets present
function getIndexof(str, target) {
  console.log("Orginal String:", str);
  console.log("Index of last Streing is:", str.lastIndexOf(target));
}

getIndexof("Hello world world world", "world");

// slice method
function getSlice(str) {
  console.log("Original String:", str);
  console.log("Sliced String:", str.slice(0, 5));
}
getSlice("Shubham Dhole");

// substring method
function getSubstring(str) {
  console.log("Original String:", str);
  console.log("Substring is:", str.substring(0, 5));
}

getSubstring("Shubham");

// replace method
function getReplacement(str, target, replacement) {
  console.log("Original String:", str);
  console.log("Replaced String:", str.replace(target, replacement));
}

getReplacement("Shubham Dhole", "Dhole", "World");

// splity method
function getSplit(str, seperator) {
  console.log("Original String:", str);
  console.log("Splitted String:", str.split(seperator));
}

getSplit("Shubham Dhole", "b");

// trim method
function getTrim(str) {
  console.log("Original String:", str);
  console.log("Trimmed String:", str.trim());
}

getTrim("  Shubham Dhole");

// toUpperCase method
function getUpperCase(str) {
  console.log("Original String:", str);
  console.log("Capitilized String:", str.toUpperCase());
}
getUpperCase("shubham");

// toLowerCase method
function getLowerCase(str) {
  console.log("Original String:", str);
  console.log("LowerCase String:", str.toLowerCase());
}

getLowerCase("SHUBHAM");
