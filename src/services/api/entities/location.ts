import BaseEntity from "./base-entity.ts"
import ParkingSlot from "./parking-slot.ts"
import User from "./user.ts"
import Address from "./address.ts"

interface Location extends BaseEntity
{
   name: string
   teamMemberId: string
   addressId: string

   address?: Address
   teamMemberList?: User[]
   parkingSlotList?: ParkingSlot[]
}

export default Location