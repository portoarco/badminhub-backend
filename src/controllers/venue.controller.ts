import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getAllVenue = async (req: Request, res: Response) => {
  try {
    const data = await prisma.venues.findMany();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
