import { Router } from "express";
import { createFlight, getFlightById, getFlightsToCityId } from "../controllers/flights.controller.js";

const flightsRouter = Router();

flightsRouter.post("/flights", createFlight);
flightsRouter.get("/flights/to/:city_id", getFlightsToCityId);
flightsRouter.get("/flights/:id", getFlightById);

export default flightsRouter;