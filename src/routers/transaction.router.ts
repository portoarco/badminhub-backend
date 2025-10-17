import { Router } from "express";
import { postNewTransaction } from "../controllers/transaction.controller";

const route = Router();

// route.get("/all", getAllVenue);
// route.get("/:id", getVenueDetails);
route.post("/", postNewTransaction);

export default route;
