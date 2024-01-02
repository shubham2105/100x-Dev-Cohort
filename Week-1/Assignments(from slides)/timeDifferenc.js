/* 2. Calculate the time it takes between 
a setTimeout call and the inner function 
actually running */

function measureTimeout() {
  // recording the start time
  const start = performance.now();
  setTimeout(() => {
    const end = performance.now();
    const duration = end - start;
    console.log(
      `Duration between setTimeout call and execution: ${duration} miliseconds`
    );
  }, 1000);
}

measureTimeout();
