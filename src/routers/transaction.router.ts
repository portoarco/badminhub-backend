import { Router } from "express";
import {
  createBookingandPayment,
  createTransaction,
  postCalculateTrx,
} from "../controllers/transaction.controller";

const route = Router();

// route.get("/all", getAllVenue);
// route.get("/:id", getVenueDetails);
route.post("/calculate", postCalculateTrx);
route.post("/create-transaction", createTransaction);
route.post("/create-bokpay", createBookingandPayment);

export default route;
