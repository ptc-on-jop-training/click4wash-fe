import BookingStatus from "../consts/booking-status.ts"
import BaseEntity from "./base-entity.ts"
import Booking from "./booking.ts"
import User from "./user.ts"

interface BookingHistory extends BaseEntity {
   bookingId: string
   creatorId: string
   status: BookingStatus

   comment?: string
   rating?: number
   booking?: Booking
   creator?: User
}

export default BookingHistory