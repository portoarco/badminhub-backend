import { faker } from "@faker-js/faker";
import { PrismaClient, BookingStatus, PaymentStatus } from "@prisma/client";

const prisma = new PrismaClient();

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]!;
};

async function main() {
  // 1. HAPUS DATA LAMA
  console.log("Menghapus data yang ada . . .");
  await prisma.payments.deleteMany({});
  await prisma.bookingDetails.deleteMany({});
  await prisma.bookings.deleteMany({});
  await prisma.timeSlots.deleteMany({});
  await prisma.venues.deleteMany({});
  await prisma.users.deleteMany({});
  console.log("Data lama berhasil dihapus. ✅");

  // 2. BUAT USERS
  console.log("Membuat 20 data user . . .");
  const users = await prisma.users.createManyAndReturn({
    data: Array.from({ length: 20 }, () => ({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email().toLowerCase(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
    })),
  });
  console.log("20 user berhasil dibuat. ✅");

  // 3. BUAT VENUES DENGAN 13 SLOT WAKTU TETAP
  console.log("Membuat 10 venue dengan 13 slot waktu tetap . . .");

  // Definisikan 13 slot waktu yang Anda inginkan
  // const fixedTimeSlots = [
  //   { startHour: 8, endHour: 9 }, // Slot 1
  //   { startHour: 9, endHour: 10 }, // Slot 2
  //   { startHour: 10, endHour: 11 }, // Slot 3
  //   { startHour: 11, endHour: 12 }, // Slot 4
  //   { startHour: 12, endHour: 13 }, // Slot 5
  //   { startHour: 13, endHour: 14 }, // Slot 6
  //   { startHour: 14, endHour: 15 }, // Slot 7
  //   { startHour: 15, endHour: 16 }, // Slot 8
  //   { startHour: 16, endHour: 17 }, // Slot 9
  //   { startHour: 17, endHour: 18 }, // Slot 10
  //   { startHour: 18, endHour: 19 }, // Slot 11
  //   { startHour: 19, endHour: 20 }, // Slot 12
  //   { startHour: 20, endHour: 21 }, // Slot 13
  // ];

  for (let i = 0; i < 10; i++) {
    // const timeSlotsToCreate = [];

    // // Buat 13 slot ini untuk 7 hari ke depan agar data lebih realistis
    // for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    //   const targetDate = new Date();
    //   targetDate.setDate(targetDate.getDate() + dayOffset);

    //   for (const slot of fixedTimeSlots) {
    //     const startTime = new Date(targetDate);
    //     startTime.setHours(slot.startHour, 0, 0, 0);

    //     const endTime = new Date(targetDate);
    //     endTime.setHours(slot.endHour, 0, 0, 0);

    //     timeSlotsToCreate.push({
    //       start_time: startTime,
    //       end_time: endTime,
    //     });
    //   }
    // }

    // Buat Venue sekaligus dengan semua time slot yang sudah didefinisikan
    await prisma.venues.create({
      data: {
        name: `${faker.company.name()} Badminton Hall`,
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        cp_phone: faker.phone.number(),
        price: faker.number.int({ min: 50000, max: 150000 }),
        description: faker.lorem.paragraph(),
        banner: faker.image.urlPicsumPhotos({ width: 1280, height: 720 }),
        rating: faker.number.float({ min: 3.5, max: 5 }),
        reviewer: faker.number.int({ min: 10, max: 500 }),
        // time_slots: {
        //   create: timeSlotsToCreate,
        // },
      },
    });
  }
  console.log("10 venue beserta slot waktunya berhasil dibuat. ✅");

  // // 4. BUAT BOOKINGS ACAK
  // console.log("Membuat 15 data booking acak . . .");

  // const availableTimeSlots = await prisma.timeSlots.findMany({
  //   where: { isBooked: false },
  //   include: { venue: true },
  // });

  // availableTimeSlots.sort(() => Math.random() - 0.5);

  // for (let i = 0; i < 15; i++) {
  //   const randomUser = getRandomElement(users);
  //   const selectedSlot = availableTimeSlots.pop();

  //   if (!randomUser || !selectedSlot) {
  //     console.warn("Slot atau user habis, booking berhenti.");
  //     break;
  //   }

  //   const randomBookingStatus = getRandomElement(Object.values(BookingStatus));
  //   const randomPaymentStatus = getRandomElement(Object.values(PaymentStatus));

  //   await prisma.bookings.create({
  //     data: {
  //       user_id: randomUser.id,
  //       total_price: selectedSlot.venue.price,
  //       status: randomBookingStatus,
  //       booking_details: {
  //         create: {
  //           venue_id: selectedSlot.venues_id,
  //           slot_id: selectedSlot.id,
  //           booking_date: selectedSlot.start_time,
  //         },
  //       },
  //       payment: {
  //         create: {
  //           transaction_id: `TRX-${faker.string.uuid()}`,
  //           payment_method: "Virtual Account",
  //           amount: selectedSlot.venue.price,
  //           payment_status: randomPaymentStatus,
  //           va_number: faker.finance.accountNumber(16),
  //           pdf_url: faker.internet.url(),
  //         },
  //       },
  //     },
  //   });

  //   await prisma.timeSlots.update({
  //     where: { id: selectedSlot.id },
  //     data: { isBooked: true },
  //   });
  // }

  // console.log("15 booking acak berhasil dibuat. ✅");
  // console.log("Seeding data complete! 🚀");
}

main()
  .catch((e) => {
    console.error("Terjadi error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
