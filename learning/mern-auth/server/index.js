import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/mongo.db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`\nMERN-auth SERVER running on http://localhost:${PORT}`);
  connectDB();
});
