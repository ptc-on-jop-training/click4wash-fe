import BookingStatus from "../consts/booking-status.ts"
import TypeVehicle from "../../../pages/(protected)/admin/list-booking/type-vehicle.tsx"

interface BookingResponse
{
   typeVehicle: typeof TypeVehicle
   numberPlateVehicle: string
   timeSlotStart: Date
   timeSlotEnd: Date
   nameParkingSlot: string
   status: BookingStatus
}
export default BookingResponse