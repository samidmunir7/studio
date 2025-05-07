import express from "express";

const authRouter = express.Router();

authRouter.get("/register", (req, res) => {});
authRouter.get("/login", (req, res) => {});
authRouter.get("/logout", (req, res) => {});

export default authRouter;
