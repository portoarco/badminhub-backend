import { Request, response, Response } from "express";
import midtransClient from "midtrans-client";
import { prisma } from "../config/prisma";
import { Prisma } from "@prisma/client";

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
        order_id: `ORDER-${Date.now()}`,
        gross_amount: gross_amount,
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

export const createBookingandPayment = async (req: Request, res: Response) => {
  try {
    const paymentData = {
      order_id: req.body.trxData.order_id,
      transaction_id: req.body.trxData.transaction_id,
      gross_amount: req.body.trxData.gross_amount,
      payment_method: req.body.trxData.payment_type,
      booking_date: req.body.trxData.transaction_time,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    };
    const venue_id = req.body.slots.map((slot: any) => slot.venueId);
    const slot_id = req.body.slots.map((slot: any) => slot.slotId);

    // create bookings
    const bookings = await prisma.bookings.create({
      data: {
        customer_first_name: paymentData.first_name,
        customer_last_name: paymentData.last_name,
        email: paymentData.email,
        phone: paymentData.phone,
        order_id: paymentData.order_id,
        gross_amount: Number(paymentData.gross_amount),
        status: "CONFIRMED",
      },
    });
    // create booking details
    const bookingDetailsData = slot_id.map((slotId: number, index: number) => ({
      venue_id: venue_id[index],
      slot_id: slot_id,
      booking_date: new Date(paymentData.booking_date),
      booking_id: bookings.id,
    }));

    const bookingDetails = await prisma.bookingDetails.createMany({
      data: bookingDetailsData,
    });
    // create payment
    const payment = await prisma.payments.create({
      data: {
        booking_id: bookings.id,
        order_id: paymentData.order_id,
        transaction_id: paymentData.transaction_id,
        gross_amount: paymentData.gross_amount,
        payment_method: paymentData.payment_method,
      },
    });

    console.log(paymentData, venue_id, slot_id);
    res.status(200).send("Booking and payment ok");
  } catch (error) {
    console.log(error);
    res.status(500).send("Create Booking and Payment Error!");
  }
};
