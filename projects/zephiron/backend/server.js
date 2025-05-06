import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const APP = express();

APP.use(cors());
APP.use(express.json());

APP.get("/", (req, res) => {
  res.send("Welcome to Zephiron Server!");
});

APP.listen(PORT, () => {
  console.log(`Zephiron server is running on port http://localhost:${PORT}`);
});
