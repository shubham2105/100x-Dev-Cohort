function debounce(func, delay) {
  let timerID;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function sayHEllo() {
  console.log("Hello Boys!");
}

const debouncedHello = debounce(sayHEllo, 1000);
debouncedHello();
