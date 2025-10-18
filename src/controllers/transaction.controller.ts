import { Request, Response } from "express";

export const postCalculateTrx = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;
    const priceVenueArray = bookingData.map((price: any) => price.venuePrice);
    // console.log(priceVenueArray);
    const totalVenuePriceFormula = priceVenueArray.reduce(
      (acc: any, curr: any) => acc + curr,
      0
    );
    const adminFee = 10000;
    const ppn = Math.floor((10 / 100) * totalVenuePriceFormula);
    const totalFixPrice = totalVenuePriceFormula + adminFee + ppn;
    res.status(200).json({
      message: "Calculate Transaction Success",
      data: {
        totalVenuePriceFormula,
        ppn,
        adminFee,
        totalFixPrice,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Get All Trx Error");
  }
};
export const postNewPayment = async (req: Request, res: Response) => {
  try {
    console.log();
  } catch (error) {
    console.log(error);
  }
};
