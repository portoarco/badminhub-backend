import { Router } from "express";
import {
  getAllVenue,
  getVenueDetails,
  keepSlotVenue,
} from "../controllers/venue.controller";

const route = Router();

route.get("/all", getAllVenue);
route.post("/keep-slot", keepSlotVenue);
route.get("/:id", getVenueDetails);

export default route;
