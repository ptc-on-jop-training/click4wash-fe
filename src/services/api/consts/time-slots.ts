import TimeSlot from "../entities/time-slot.ts"

const TimeSlots = Object.freeze({
   A: <TimeSlot> {
      start: new Date(),
      end: new Date()
   },
   B: <TimeSlot> {
      start: new Date(),
      end: new Date()
   },
   C: <TimeSlot> {
      start: new Date(),
      end: new Date()
   },
   D: <TimeSlot> {
      start: new Date(),
      end: new Date()
   }
})
function FormatTimeSlot(timeSlot: TimeSlot) {

   const { start, end } = timeSlot
   const startDate = new Date(start)
   const endDate = new Date(end)
   const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
   const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`

   return `${startTime} - ${endTime}`
}

export {FormatTimeSlot}
export default TimeSlots