import { Request, response, Response } from "express";
import midtransClient from "midtrans-client";

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
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const first_name = req.body.user.first_name;
    const last_name = req.body.user.last_name;
    const email = req.body.user.email;
    const gross_amount = req.body.transactionData.totalFixPrice;

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
      clientKey: process.env.MIDTRANS_CLIENT_KEY!,
    });

    const parameter = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`, //testing (harus pakai req.body /ambil dari FE)
        gross_amount: gross_amount, //testing
      },
      customer_details: {
        first_name: first_name,
        last_name: last_name,
        email: email,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    const token = transaction.token;
    const redirect_url = transaction.redirect_url;

    res
      .status(200)
      .json({ message: "Transaction Success", token, redirect_url });
  } catch (error) {
    console.log(error);
    res.status(500).send("Transaction Failed!");
  }
};
