import { Request, Response } from "express";

export const getAllVenue = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
