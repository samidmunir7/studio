import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/mongo.db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`\nMERN-auth SERVER running on http://localhost:${PORT}`);
  connectDB();
});
