import { Router } from "express";
import { createAmenity } from "../controllers/amenities.controller.js";

const amenitiesRouter = Router();

amenitiesRouter.post("/amenities", createAmenity);

export default amenitiesRouter;