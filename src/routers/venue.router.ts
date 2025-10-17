import { Router } from "express";
import { getAllVenue } from "../controllers/venue.controller";

const route = Router();

route.get("/all", getAllVenue);

export default route;
