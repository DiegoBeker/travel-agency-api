import { Router } from "express";
import { getCities } from "../controllers/cities.controller.js";

const citiesRouter = Router();

citiesRouter.get("/cities", getCities);

export default citiesRouter;