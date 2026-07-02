const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "PlaylistCategory" }
});

module.exports = mongoose.model("Song", songSchema);
