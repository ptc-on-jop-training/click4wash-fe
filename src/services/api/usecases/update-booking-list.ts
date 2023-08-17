import axios from "axios"

export async function updateBookingStatus(
   bookingId: string,
   newStatus: string
): Promise<void> {
   try {
      const response = await axios.put(
         `https://64c8ab3ba1fe0128fbd60811.mockapi.io/bookings/${bookingId}`,
         {
            status: newStatus,
         }
      )

      if (response.status === 200) {
         console.log(`Booking ${bookingId} status updated to "${newStatus}"`)
      } else {
         console.error("Failed to update booking status")
      }
   } catch (error:any) {
      console.error("An error occurred:", error.message)
   }
}