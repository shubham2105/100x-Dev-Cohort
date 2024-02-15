function shubhamsAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });
  return p;
}

async function main() {
  const value = await shubhamsAsyncFunction();
  console.log(value);
}

main();
