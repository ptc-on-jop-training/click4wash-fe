import {VehicleType, TimeSlot, BookingStatusEnum} from "../index.ts"

interface BookingResponse
{
   id: string,
   vehicleType: VehicleType
   vehicleNumberPlate: string
   timeSlot: TimeSlot
   parkingSlotName: string
   status: BookingStatusEnum
   createAt: Date

}
export default BookingResponse