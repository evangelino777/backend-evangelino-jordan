const prisma = require("../models/prismaClient");

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const product = await prisma.product.create({
    data: { name, price },
  });
  res.status(200).json({ productName: product.name, price: product.price });
};

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json(products);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { name, price },
  });
  res.status(200).json({ productName: product.name, price: product.price });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: parseInt(id) } });
  res.status(200).json({ message: "Product deleted successfully" });
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
