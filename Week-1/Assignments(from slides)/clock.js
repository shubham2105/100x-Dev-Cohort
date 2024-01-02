function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const clock = `${hours}:${minutes}:${seconds}`;
  process.stdout.write("\x1B[1F"); // Move cursor up one line
  process.stdout.write("\x1B[K"); // Clear the line
  console.log(clock); // Write the clock
  setTimeout(updateClock, 1000); // calls updateClock after every second
}

updateClock();
