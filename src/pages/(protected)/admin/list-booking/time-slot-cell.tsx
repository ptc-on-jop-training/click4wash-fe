import { GridRenderCellParams } from '@mui/x-data-grid'

function TimeSlotCell(props: GridRenderCellParams) {
   const { start, end } = props.value
   const startDate = new Date(start)
   const endDate = new Date(end)
   const startTime = `${startDate.getHours()}:${startDate.getMinutes()}`
   const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`
   const formattedTimeSlot = `${startTime} - ${endTime}`

   return <>{formattedTimeSlot}</>
}

export default TimeSlotCell