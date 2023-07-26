import BaseEntity from "./base-entity.ts"
import Booking from "./booking.ts"

interface ParkingSlot extends BaseEntity
{
   locationId: string
   parkingSlotName:string

   location?: Location
   bookingList?: Booking[]
}

export default ParkingSlot