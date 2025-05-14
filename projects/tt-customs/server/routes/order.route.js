import express from "express";
import {
  createOrder,
  getOrdersByUser,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/user/:id", getOrdersByUser);

export default orderRouter;
