/*
  Warnings:

  - You are about to drop the `BookingDetails` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gross_amount` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."BookingDetails" DROP CONSTRAINT "BookingDetails_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."BookingDetails" DROP CONSTRAINT "BookingDetails_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."BookingDetails" DROP CONSTRAINT "BookingDetails_venue_id_fkey";

-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "gross_amount" INTEGER NOT NULL,
ADD COLUMN     "order_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."BookingDetails";
