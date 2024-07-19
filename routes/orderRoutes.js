const express = require("express");
const router = express.Router();
const {
  buyProduct,
  getCustomerNames,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/product/buy", authMiddleware, buyProduct);
router.get("/product/customer", authMiddleware, getCustomerNames);

module.exports = router;
