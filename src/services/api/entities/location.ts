import BaseEntity from "./base-entity.ts"
import ParkingSlot from "./parking-slot.ts"

interface Location extends BaseEntity
{
   line1: string
   line2: string
   line3: string
   line4?: string

   parkingSlotList?: ParkingSlot[]
}

export default Location