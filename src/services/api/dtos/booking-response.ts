import {VehicleType, TimeSlot, BookingStatus} from "../index.ts"

interface BookingResponse
{
   id: string,
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: TimeSlot
   parkingSlotName: string
   status: BookingStatus
   createdAt: Date

}
export default BookingResponse