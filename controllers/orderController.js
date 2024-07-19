const prisma = require("../models/prismaClient");

const buyProduct = async (req, res) => {
  const { productId, productName, price, customerName } = req.body;
  let discount = "0";
  let freeDelivery = "no";
  let totalPrice = price;

  if (price > 15000) {
    freeDelivery = "yes";
    if (price > 50000) {
      discount = "10%";
      totalPrice = price * 0.9;
    }
  }

  const order = await prisma.order.create({
    data: { productId, productName, price, customerName, totalPrice },
  });

  res.status(200).json({
    productName,
    price,
    discount,
    totalPrice,
    freeDelivery,
    customerName,
  });
};

const getCustomerNames = async (req, res) => {
  const orders = await prisma.order.findMany({
    select: { customerName: true },
  });
  const customerNames = orders.map((order) => order.customerName);
  res.status(200).json(customerNames);
};

module.exports = { buyProduct, getCustomerNames };
