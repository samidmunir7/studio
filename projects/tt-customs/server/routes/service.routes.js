import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";

const serviceRouter = express.Router();

serviceRouter.post("/", createService);
serviceRouter.get("/", getAllServices);
serviceRouter.get("/:id", getServiceById);
serviceRouter.put("/:id", updateService);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;
