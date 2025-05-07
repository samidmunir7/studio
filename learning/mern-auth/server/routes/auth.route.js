import express from "express";
import {
  register,
  verifyEmail,
  login,
  logout,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
