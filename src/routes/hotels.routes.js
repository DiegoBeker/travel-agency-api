import { Router } from "express";
import { createHotel, getHotelById, getHotelsByCity } from "../controllers/hotels.controller.js";
import { createHotelPicture } from "../controllers/hotelsPictures.controller.js";

const hotelsRouter = Router();

hotelsRouter.post("/hotels", createHotel);
hotelsRouter.get("/hotels/:city", getHotelsByCity);
hotelsRouter.post("/pictures/hotels/:id", createHotelPicture);
hotelsRouter.get("/hotels/:city/:id", getHotelById);

export default hotelsRouter;