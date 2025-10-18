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
    const keepSlotData = req.body;

    const slotsToKeep = keepSlotData.map((slot: any) => ({
      venues_id: slot.venueId,
      start_time: slot.start_time,
      end_time: slot.end_time,
      isBooked: true,
    }));

    const findSlotsId = await prisma.timeSlots.findMany({
      where: {
        venues_id: slotsToKeep.venues_id,
        start_time: slotsToKeep.start_time,
        end_time: slotsToKeep.end_time,
      },
    });

    if (findSlotsId) return console.log("Kamu sudah punya booking slot");

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
    const removeSlot = req.body;
    const slotsToRemove = removeSlot.map((slot: any) => ({
      venues_id: slot.venueId,
      start_time: slot.start_time,
      end_time: slot.end_time,
    }));

    // cari dulu time_slots_id sesuai dengan slotsToRemove
    const findSlotsId = await prisma.timeSlots.findMany({
      where: {
        venues_id: slotsToRemove.venues_id,
        start_time: slotsToRemove.start_time,
        end_time: slotsToRemove.end_time,
      },
    });

    const removeSlotsId = findSlotsId.map((slots) => slots.id);
    console.log(removeSlotsId);
    // setelah ketemu, langsung deleteMany
    const removeSlotsfromDb = await prisma.timeSlots.deleteMany({
      where: { id: { in: removeSlotsId } },
    });
    res.status(200).send("Remove Slot Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Remove Slot Error");
  }
};
