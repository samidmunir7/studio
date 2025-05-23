import express from "express";
import { create } from "../controllers/record.controller.js";

const recordRouter = express.Router();

recordRouter.post("/create", create);

export default recordRouter;
