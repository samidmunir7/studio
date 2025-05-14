import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    estimatedTime: {
      type: String,
      required: true,
    },
    dropOffRequired: {
      type: Boolean,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
