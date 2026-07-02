const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/playlistdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/categories", require("./routes/categories"));
app.use("/songs", require("./routes/songs"));

app.listen(3000, () => console.log("Server running on port 3000"));
