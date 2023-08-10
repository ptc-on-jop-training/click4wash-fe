import { BookingStatus } from "../index.ts"

interface BookingHistoryResponse {
   id: string
   bookingId: string
   creatorId: string
   creatorEmail: string
   status: BookingStatus
   comment?: string
   rating?: number
   createdAt: Date
}
export default BookingHistoryResponse