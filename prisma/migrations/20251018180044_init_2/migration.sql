-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'EXPIRED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venues" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cp_phone" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviewer" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Venues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeSlots" (
    "id" SERIAL NOT NULL,
    "venues_id" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "isBooked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimeSlots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "customer_first_name" TEXT NOT NULL,
    "customer_last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "gross_amount" INTEGER NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingDetails" (
    "id" TEXT NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "booking_id" TEXT NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "booking_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "booking_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "gross_amount" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Venues_name_key" ON "Venues"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TimeSlots_venues_id_start_time_end_time_key" ON "TimeSlots"("venues_id", "start_time", "end_time");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_booking_id_key" ON "Payments"("booking_id");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_order_id_key" ON "Payments"("order_id");

-- AddForeignKey
ALTER TABLE "TimeSlots" ADD CONSTRAINT "TimeSlots_venues_id_fkey" FOREIGN KEY ("venues_id") REFERENCES "Venues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "TimeSlots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
