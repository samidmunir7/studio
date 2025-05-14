import express from "express";
import {
  createBooking,
  getBookingsByUser,
} from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/user/:id", getBookingsByUser);

export default bookingRouter;
