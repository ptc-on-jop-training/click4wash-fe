import {BookingStatus, TimeSlots, VehicleType,} from "../index.ts"
import BookingHistoryResponse from "./booking-history-response.ts"



interface BookingResponse
{
   id: string,
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: keyof typeof TimeSlots
   parkingSlotName: string
   address:string
   status: BookingStatus
   isCharge: boolean
   review?: {
      rating: number
      comment?: string
   }

   createdAt: Date
   historyList: BookingHistoryResponse[]
}

export default BookingResponse
