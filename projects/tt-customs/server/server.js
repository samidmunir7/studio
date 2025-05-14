import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // should show actual key
  console.log("ADMIN_CODE:", process.env.ADMIN_CODE); // should show actual code");

  connectDB();
});
