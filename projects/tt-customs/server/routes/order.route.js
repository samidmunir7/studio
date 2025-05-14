import express from "express";
import {
  createOrder,
  getOrdersByUser,
  getAllOrders,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/user/:id", getOrdersByUser);
orderRouter.get("/", getAllOrders);

export default orderRouter;
