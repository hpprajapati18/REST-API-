const express = require("express");
const router = express.Router();

// GET /posts → View feed
router.get("/", (req, res) => {
  res.json({ message: "All posts fetched" });
});

// POST /posts → Upload post
router.post("/", (req, res) => {
  res.json({ message: "Post created", data: req.body });
});

// POST /posts/:id/likes → Like post
router.post("/:id/likes", (req, res) => {
  res.json({ message: `Post ${req.params.id} liked` });
});

// DELETE /posts/:id → Delete post
router.delete("/:id", (req, res) => {
  res.json({ message: `Post ${req.params.id} deleted` });
});

module.exports = router;
