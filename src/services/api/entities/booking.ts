import BookingStatus from "../consts/booking-status.ts"
import BaseEntity from "./base-entity.ts"
import BookingHistory from "./booking-history.ts"
import ParkingSlot from "./parking-slot.ts"
import TimeSlot from "./time-slot.ts"
import Vehicle from "./vehicle.ts"

interface Booking extends BaseEntity
{
   vehicleId: string
   parkingSlotId: string
   status: BookingStatus
   timeSlot: TimeSlot
   isCharge: boolean

   vehicle?: Vehicle
   parkingSlot?: ParkingSlot
   historyList?: BookingHistory[]
}

export default Booking