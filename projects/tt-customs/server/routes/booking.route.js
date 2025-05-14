import express from "express";
import {
  createBooking,
  getBookingsByUser,
  getAllBookings,
} from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/user/:id", getBookingsByUser);
bookingRouter.get("/", getAllBookings);

export default bookingRouter;
