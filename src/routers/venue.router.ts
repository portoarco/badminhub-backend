import { Router } from "express";
import {
  getAllVenue,
  getVenueDetails,
  keepSlotVenue,
  removeSlotVenue,
} from "../controllers/venue.controller";

const route = Router();

route.get("/all", getAllVenue);
route.post("/keep-slot", keepSlotVenue);
route.delete("/remove-slot", removeSlotVenue);
route.get("/:id", getVenueDetails);

export default route;
