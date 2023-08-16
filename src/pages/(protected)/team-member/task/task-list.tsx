import  { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Box,  Typography } from "@mui/material"
import DetailTaskModal from "../../../../components/inputs/detail-booking-modal"
import {
   FetchBookingList,
   RootStateType,
   useRootDispatch,
} from "../../../../stores"
import { BookingResponse, TimeSlots } from "../../../../services/api"
import { BookingPreview } from "../../../../components"

const findBookingIndex = (
   bookingList: BookingResponse[],
   booking: BookingResponse
) => {
   const index = bookingList.findIndex((item) => item.id === booking.id)
   if (index !== -1) {
      return index
   } else return null
}

const TaskList = () => {
   const dispatch = useRootDispatch()

   useEffect(() => {
      dispatch(FetchBookingList())
   }, [])

   const bookingList = useSelector(
      (state: RootStateType) => state.booking.bookingList
   )
   const [isOpenModal, setOpenModal] = useState<boolean>(false)

   const [IndexBookingDetail, setIndexBookingDetail] = useState<number>(0)

   const handleSetIndexBookingDetail = (
      bookingList: BookingResponse[],
      booking: BookingResponse
   ) => {
      setIndexBookingDetail(findBookingIndex(bookingList, booking) || 0)
   }

   const HandleCloseDetail = () => {
      setOpenModal(false)
   }
   return (
      <Box marginBottom={10}>
         {Object.keys(TimeSlots).map((timeSlotKey) => {
            const bookingsForTimeSlot = bookingList?.filter(
               (booking: BookingResponse) => booking.timeSlot === timeSlotKey
            )
            return (
               <Box key={timeSlotKey}>
                  <Typography variant="h6">Time Slot: {timeSlotKey}</Typography>
                  {bookingsForTimeSlot?.map((booking: BookingResponse) => (
                     <Box key={booking.id} marginBottom={1}>
                        <BookingPreview
                           onClick={() => {
                              handleSetIndexBookingDetail(bookingList, booking)
                              setOpenModal(true)
                           }}
                           status={booking.status}
                           vehicleType={booking.vehicleType}
                           isCharge={booking.isCharge}
                           timeSlot={booking.timeSlot}
                           variant={"team-member"}
                        />
                     </Box>
                  ))}

                  {isOpenModal && (
                     <DetailTaskModal
                        isOpen={isOpenModal}
                        handleClose={HandleCloseDetail}
                        bookingIndex={IndexBookingDetail}
                        variant="team-member"
                     />
                  )}
               </Box>
            )
         })}
      </Box>
   )
}

export default TaskList
