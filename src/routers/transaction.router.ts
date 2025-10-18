import { Router } from "express";
import {
  postCalculateTrx,
  postNewPayment,
} from "../controllers/transaction.controller";

const route = Router();

// route.get("/all", getAllVenue);
// route.get("/:id", getVenueDetails);
route.post("/calculate", postCalculateTrx);
route.post("/payment", postNewPayment);

export default route;
