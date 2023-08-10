import {BookingStatus, BookingHistory} from "../index.ts"
import BookingHistoryResponse from "./booking-history-response.ts"

interface BookingResponse {
   parkingSlotName: string
   status: BookingStatus
   createdAt: Date
   bookingHistory: BookingHistory
   historyList: BookingHistoryResponse[]
}

export default BookingResponse
