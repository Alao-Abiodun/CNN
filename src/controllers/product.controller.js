const Product = require("../models/product.model");

exports.createProduct = async (req, res, next) => {
  try {
    const { title, description, price } = req.body;
    const newProduct = await Product.create({
      title,
      description,
      price,
    });
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
