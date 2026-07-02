const express = require("express");
const router = express.Router();

// PUT /users/:id → Update profile
router.put("/:id", (req, res) => {
  res.json({
    message: `User ${req.params.id} updated`,
    data: req.body
  });
});

// PUT /users/:id/address → Update delivery address
router.put("/:id/address", (req, res) => {
  res.json({
    message: "Address updated successfully",
    data: req.body
  });
});

module.exports = router;
