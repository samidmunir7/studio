import express from "express";
import {
  create,
  getAllRecordsByUserId,
} from "../controllers/record.controller.js";

const recordRouter = express.Router();

recordRouter.post("/create", create);
recordRouter.post("/get-user-records", getAllRecordsByUserId);

export default recordRouter;
