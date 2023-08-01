import Vehicle from "../entities/vehicle.ts"
import TimeSlot from "../entities/time-slot.ts"
import ParkingSlot from "../entities/parking-slot.ts"
import BookingStatus from "../consts/booking-status.ts"

interface BookingResponse
{
   typeVehicle: Vehicle["type"]
   numberPlateVehicle: Vehicle["numberPlate"]
   timeSlotStart: TimeSlot["start"]
   timeSlotEnd: TimeSlot["end"]
   nameParkingSlot: ParkingSlot["name"]
   status: BookingStatus
}
export default BookingResponse