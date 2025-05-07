import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/mongo.db.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`MERN-auth SERVER running on http://localhost:${PORT}`);
  connectDB();
});
