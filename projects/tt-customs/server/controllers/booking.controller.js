import Booking from "../models/booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, serviceId, scheduledDate, scheduledTime } = req.body;
    const booking = await Booking.create({
      userId,
      serviceId,
      scheduledDate,
      scheduledTime,
    });
    res.status(201).json(booking);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Booking creation failed", error: err.message });
  }
};

export const getBookingsByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Booking.find({ userId: id }).populate("serviceId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
