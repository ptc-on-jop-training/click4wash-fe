import TimeSlot from "../entities/time-slot.ts"

interface CreateBookingRequest
{
   vehicleId: string
   locationId: string
   date: Date
   timeSlot: TimeSlot
}

export default CreateBookingRequest