import BaseEntity from "./base-entity.ts"
import Booking from "./booking.ts"
import User from "./user.ts"

interface ParkingSlot extends BaseEntity
{
   locationId: string
   teamMemberId: string
   packingName:string
   packingNumber:string

   teamMember?: User
   location?: Location
   bookingList?: Booking[]
}

export default ParkingSlot