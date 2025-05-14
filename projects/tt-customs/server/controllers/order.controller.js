import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const order = await Order.create({ userId, items, total });
    res.status(201).json(order);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Order creation failed", error: err.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.find({ userId: id }).populate("items.productId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
