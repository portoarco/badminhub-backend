import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getAllVenue = async (req: Request, res: Response) => {
  try {
    const data = await prisma.venues.findMany({
      include: {
        time_slots: true,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getVenueDetails = async (req: Request, res: Response) => {
  try {
    const venueId = Number(req.params.id);
    const venueDetails = await prisma.venues.findUnique({
      where: {
        id: venueId,
      },
      include: {
        time_slots: true,
      },
    });
    console.log(venueDetails);
    res.status(200).send(venueDetails);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const keepSlotVenue = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const keepSlotData = req.body;

    const slotsToKeep = keepSlotData.map((slot: any) => ({
      venues_id: slot.venueId,
      start_time: slot.start_time,
      end_time: slot.end_time,
      isBooked: true,
    }));

    const data = await prisma.timeSlots.createMany({
      data: slotsToKeep,
    });
    res.status(200).send("Keep Slot Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Keep Slot Error");
  }
};

export const removeSlotVenue = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const keepSlotData = req.body;

    const slotsToKeep = keepSlotData.map((slot: any) => ({
      venues_id: slot.venueId,
      start_time: slot.start_time,
      end_time: slot.end_time,
      isBooked: true,
    }));

    const data = await prisma.timeSlots.createMany({
      data: slotsToKeep,
    });
    res.status(200).send("Keep Slot Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Keep Slot Error");
  }
};
