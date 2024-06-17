// use cases of middleware:
// 1. count the number of requests
// 2. find the average time your server is talking to handle requests
// 3. implement rate limiting such that only 5 requests can be made within duration of 1 minute

const express = require("express");
const port = 3001;
const app = express();

// miidleware to calculate the number of requests
let requestCount = 0;
let totalRequestTime = 0;
const maxRequests = 5;
const windowDuration = 60 * 1000;
let windowStart = Date.now();
// function numberOfRequests(req, res, next) {
//   requestCount++;
//   console.log("Number of requests:" + requestCount);
//   next();
// }
// middleware to calculate the average time your server is talking to handle requests
function averageRequestHandlingTime(req, res, next) {
  const start = process.hrtime();
  res.on("finish", () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const elapsedTime = seconds * 1000 + nanoseconds / 1e6;
    totalRequestTime = totalRequestTime + elapsedTime;
    const averageRequestTime = totalRequestTime / requestCount;
    console.log("Average request time" + averageRequestTime.toFixed(2) + "ms");
  });
  next();
}
// middleware for rate-limiting
function rateLimiter(req, res, next) {
  const now = Date.now();

  if (now - windowStart > windowDuration) {
    windowStart = now;
    requestCount = 0;
  }
  if (requestCount >= maxRequests) {
    console.log("too many requests, please try again later");
    return res.status(429).json({
      message: "Too many requests, please try again later.",
    });
  }
  requestCount++;
  console.log("Number of requests: " + requestCount);
  next();
}

function usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "shubham" || password != "pass") {
    res.status(403).json({
      message: "Invalid username or password",
    });
  } else {
    next();
  }
}
function kidneyCountMiddleware(req, res, next) {
  const kidneyId = parseInt(req.query.kidneyId);
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      message: "Invalid inputs",
    });
  } else {
    next();
  }
}
// using middlewares
app.use(express.json());
app.use(rateLimiter);
// app.use(numberOfRequests);
app.use(averageRequestHandlingTime);

app.get(
  "/health-checkup",
  usermiddleware,
  kidneyCountMiddleware,
  (req, res) => {
    res.send("You are healthy");
  }
);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
