import { Router } from "express";
import { createFlight, getFlightsToCityId } from "../controllers/flights.controller.js";

const flightsRouter = Router();

flightsRouter.post("/flights", createFlight);
flightsRouter.get("/flights/to/:city_id", getFlightsToCityId);

export default flightsRouter;