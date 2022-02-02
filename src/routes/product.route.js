const express = require("express");
const productController = require("../controllers/product.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/create",
  authMiddleware.authorize,
  authMiddleware.isAdmin,
  productController.createProduct
);

module.exports = router;
