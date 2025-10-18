/*
  Warnings:

  - You are about to drop the column `amount` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `Payments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `Payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gross_amount` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Payments_transaction_id_key";

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "amount",
DROP COLUMN "transaction_id",
ADD COLUMN     "gross_amount" INTEGER NOT NULL,
ADD COLUMN     "order_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BookingDetails" (
    "id" TEXT NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "booking_id" TEXT NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "booking_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payments_order_id_key" ON "Payments"("order_id");

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "TimeSlots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
