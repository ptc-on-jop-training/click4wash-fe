import TimeSlot from "../entities/time-slot.ts"

const TimeSlots = Object.freeze({
   A: <TimeSlot>{
      start: new Date("3000-01-01T06:00:00"),
      end: new Date("3000-01-01T07:00:00"),
   },
   B: <TimeSlot>{
      start: new Date("3000-01-01T08:00:00"),
      end: new Date("3000-01-01T09:00:00"),
   },
   C: <TimeSlot>{
      start: new Date("3000-01-01T09:00:00"),
      end: new Date("3000-01-01T10:00:00"),
   },
   D: <TimeSlot>{
      start: new Date("3000-01-01T11:00:00"),
      end: new Date("3000-01-01T12:00:00"),
   },
   E: <TimeSlot>{
      start: new Date("3000-01-01T13:00:00"),
      end: new Date("3000-01-01T14:00:00"),
   },
   F: <TimeSlot>{
      start: new Date("3000-01-01T15:00:00"),
      end: new Date("3000-01-01T16:00:00"),
   },
   G: <TimeSlot>{
      start: new Date("3000-01-01T17:00:00"),
      end: new Date("3000-01-01T18:00:00"),
   },
   H: <TimeSlot>{
      start: new Date("3000-01-01T19:00:00"),
      end: new Date("3000-01-01T20:00:00"),
   },
   I: <TimeSlot>{
      start: new Date("3000-01-01T21:00:00"),
      end: new Date("3000-01-01T22:00:00"),
   },
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