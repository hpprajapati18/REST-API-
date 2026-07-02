const express = require("express");
const router = express.Router();
const Category = require("../models/PlaylistCategory");

// POST /categories
router.post("/", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});

// DELETE /categories/:id
router.delete("/:id", async (req, res) => {
  const result = await Category.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).json({ message: "Not found" });
  res.status(200).json({ message: "Deleted" });
});

module.exports = router;
