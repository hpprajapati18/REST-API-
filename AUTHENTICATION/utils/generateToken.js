const jwt = require("jsonwebtoken");
const SECRET = "mysecretkey";

function generateAuthToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );
}

module.exports = generateAuthToken;
