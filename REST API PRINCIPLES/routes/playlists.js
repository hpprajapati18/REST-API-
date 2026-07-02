const express = require("express");
const router = express.Router();

// Create playlist
router.post("/", (req, res) => {
  res.json({ message: "Playlist created", data: req.body });
});

// Get playlist
router.get("/:id", (req, res) => {
  res.json({ message: `Playlist ${req.params.id} details` });
});

// Update playlist
router.put("/:id", (req, res) => {
  res.json({ message: `Playlist ${req.params.id} updated` });
});

// Delete playlist
router.delete("/:id", (req, res) => {
  res.json({ message: `Playlist ${req.params.id} deleted` });
});

// Add song
router.post("/:id/songs", (req, res) => {
  res.json({ message: "Song added to playlist", data: req.body });
});

// Remove song
router.delete("/:id/songs/:songId", (req, res) => {
  res.json({
    message: `Song ${req.params.songId} removed from playlist`
  });
});

module.exports = router;
