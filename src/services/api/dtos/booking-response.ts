import {VehicleType, TimeSlot, BookingStatus} from "../index.ts"

interface BookingResponse
{
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: TimeSlot
   parkingSlotName: string
   status: BookingStatus

}
export default BookingResponse