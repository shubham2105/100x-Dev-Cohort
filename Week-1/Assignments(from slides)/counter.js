let counter = 30;

function countdown() {
  console.log(counter);
  counter--;

  if (counter < 0) {
    clearInterval(intervalId);
    console.log("CountDown Completed.");
  }
}

const intervalId = setInterval(countdown, 1000);
