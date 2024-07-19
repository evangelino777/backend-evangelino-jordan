const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/product", authMiddleware, createProduct);
router.get("/product", authMiddleware, getAllProducts);
router.put("/product/:id", authMiddleware, updateProduct);
router.delete("/product/:id", authMiddleware, deleteProduct);

module.exports = router;
