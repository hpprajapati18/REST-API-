const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

// POST /songs
router.post("/", async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /songs?category=id
router.get("/", async (req, res) => {
  const filter = req.query.category ? { category: req.query.category } : {};
  const songs = await Song.find(filter).populate("category", "name");
  res.status(200).json(songs);
});

module.exports = router;
