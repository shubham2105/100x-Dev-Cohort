const jwt = require("jsonwebtoken");
require("dotenv").config();

//

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Acess denied, no token provided",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = { auth };
