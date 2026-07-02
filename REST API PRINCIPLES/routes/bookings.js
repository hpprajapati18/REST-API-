const express = require("express");
const router = express.Router();

// Correct: GET /movies
router.get("/movies", (req, res) => {
  res.json({ message: "Movies list fetched" });
});

// Correct: DELETE /bookings/:id
router.delete("/:id", (req, res) => {
  res.json({ message: `Booking ${req.params.id} deleted` });
});

module.exports = router;
