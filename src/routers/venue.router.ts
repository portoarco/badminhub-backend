import { Router } from "express";
import { getAllVenue } from "../controllers/venue.controller";

const route = Router();

route.get("/route", getAllVenue);

export default route;
