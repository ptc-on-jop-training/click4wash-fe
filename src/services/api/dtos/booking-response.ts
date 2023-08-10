import {VehicleType, TimeSlot, BookingStatus, BookingHistory} from "../index.ts"


interface BookingResponse
{
   id: string,
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: TimeSlot
   parkingSlotName: string
   status: BookingStatus
   createdAt: Date,
   bookingHistory: BookingHistory

}
export default BookingResponse