import { Router } from "express";
import { createHotel, getHotelsByCity } from "../controllers/hotels.controller.js";

const hotelsRouter = Router();

hotelsRouter.post("/hotels", createHotel);
hotelsRouter.get("/hotels/:city", getHotelsByCity);

export default hotelsRouter;