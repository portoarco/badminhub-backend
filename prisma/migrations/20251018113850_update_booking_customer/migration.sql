/*
  Warnings:

  - You are about to drop the column `user_id` on the `Bookings` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Bookings" DROP CONSTRAINT "Bookings_user_id_fkey";

-- AlterTable
ALTER TABLE "Bookings" DROP COLUMN "user_id",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL;
