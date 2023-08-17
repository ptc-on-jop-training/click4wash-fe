import TimeSlot from "../entities/time-slot.ts"

const TimeSlots = Object.freeze({
   A: <TimeSlot>{
      start: "06:00",
      end: "07:00",
   },
   B: <TimeSlot>{
      start: "08:00",
      end: "08:00",
   },
   C: <TimeSlot>{
      start: "09:00",
      end: "10:00",
   },
   D: <TimeSlot>{
      start: "11:00",
      end: "12:00",
   },
   E: <TimeSlot>{
      start: "13:00",
      end: "14:00",
   },
   F: <TimeSlot>{
      start: "15:00",
      end: "16:00",
   },
   G: <TimeSlot>{
      start: "17:00",
      end: "18:00",
   },
   H: <TimeSlot>{
      start: "19:00",
      end: "20:00",
   },
   I: <TimeSlot>{
      start: "21:00",
      end: "22:00",
   },
})
function FormatTimeSlot(timeSlot: TimeSlot) {
   const { start, end } = timeSlot
   return `${start} -> ${end}`
}

export {FormatTimeSlot}
export default TimeSlots