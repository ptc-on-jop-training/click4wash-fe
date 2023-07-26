import BaseEntity from "./base-entity.ts"
import Booking from "./booking.ts"

interface ParkingSlot extends BaseEntity
{
   locationId: string
   name:string

   location?: Location
   bookingList?: Booking[]
}

export default ParkingSlot