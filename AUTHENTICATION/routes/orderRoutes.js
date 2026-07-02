const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

router.get("/my-orders", verifyToken, (req, res) => {
  const orders = [
    { orderId: 1, itemName: "Laptop" },
    { orderId: 2, itemName: "Headphones" }
  ];

  res.status(200).json({
    user: req.user,
    orders
  });
});

module.exports = router;
