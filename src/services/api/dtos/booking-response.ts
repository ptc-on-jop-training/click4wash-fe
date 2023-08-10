import {BookingStatus,  VehicleType, TimeSlot} from "../index.ts"
import BookingHistoryResponse from "./booking-history-response.ts"

interface BookingResponse
{
   id: string,
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: TimeSlot
   parkingSlotName: string
   status: BookingStatus
   createdAt: Date
   historyList: BookingHistoryResponse[]
}

export default BookingResponse
