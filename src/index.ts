import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import venueRouters from "./routers/venue.router";
import transactionRouters from "./routers/transaction.router";
import process from "process";
import cors from "cors";

const PORT: string = process.env.PORT || "5005";

const app: Application = express();

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Your API's Landing Page</h1>");
});
// ROUTER
app.use("/api/venue", venueRouters);
app.use("/api/transaction", transactionRouters);

app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});
