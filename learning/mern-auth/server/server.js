import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.config.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("MERN-auth server API");
});

app.listen(PORT, () => {
  console.log(`MERN-auth server is running on http://localhost:${PORT}`);
  connectDB();
});
