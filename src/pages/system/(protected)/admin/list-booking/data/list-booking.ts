export const ListBookingData = [
   {
      id: "1",
      date: new Date(),
      chargeBattery: true,
      location: {
         address: "123 ABC Street",
         parkingSlot: "A1",
         timeslot: 1,
      },
      driver: {
         fullName: "John Doe",
         phoneNumber: "123456789",
         email: "johndoe@example.com",
         vehicleInfo: "Car Model XYZ",
      },
      teamMember: {
         fullName: "Jane Smith",
         phoneNumber: "987654321",
         email: "janesmith@example.com",
      },
      status: "requested",
      comment: "Great service!",
      rating: 5,
      feedback: "Very satisfied with the washing service.",
   },
   {
      id: "2",
      date: new Date(),
      chargeBattery: false,
      location: {
         address: "456 XYZ Street",
         parkingSlot: "B2",
         timeslot: 2,
      },
      driver: {
         fullName: "Alice Johnson",
         phoneNumber: "987654321",
         email: "alicejohnson@example.com",
         vehicleInfo: "Car Model ABC",
      },
      teamMember: {
         fullName: "Bob Williams",
         phoneNumber: "123456789",
         email: "bobwilliams@example.com",
      },
      status: "done",
      comment: "Great service!",
      rating: 5,
      feedback: "Very satisfied with the washing service.",
   },
]