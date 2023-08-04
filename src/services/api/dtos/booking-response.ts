import {WashStatus} from "../index.ts"
import {VehicleType} from "../index.ts"


interface BookingResponse
{
   typeVehicle: VehicleType
   numberPlateVehicle: string
   timeSlotStart: Date
   timeSlotEnd: Date
   nameParkingSlot: string
   status: WashStatus
   rating: string
   comment:string
}
export default BookingResponse