const express = require("express");
const app = express();

app.use(express.json());

// Import routes
app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));
app.use("/playlists", require("./routes/playlists"));
app.use("/bookings", require("./routes/bookings"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
