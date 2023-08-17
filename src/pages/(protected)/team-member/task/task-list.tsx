import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Box, Stack, Typography } from "@mui/material"
import DetailTaskModal from "../../../../components/inputs/detail-booking-modal"
import {
   FetchBookingList,
   RootStateType,
   useRootDispatch,
} from "../../../../stores"
import {
   BookingResponse,
   FormatTimeSlot,
   TimeSlots,
} from "../../../../services/api"
import { BookingPreview } from "../../../../components"
import { UpdateBookingHistoryList } from "../../../../stores/booking-store"

const findBookingIndex = (
   bookingList: BookingResponse[],
   booking: BookingResponse
) => {
   const index = bookingList.findIndex((item) => item.id === booking.id)
   if (index !== -1) {
      return index
   } else return null
}

const DailyList: React.FC = () => {
   const dispatch = useRootDispatch()
   const isSet = useSelector((state: RootStateType) => state.booking.isSet)
   const [isOpenModal, setOpenModal] = useState<boolean>(false)

   useEffect(() => {
      FetchBookingList(isSet)(dispatch)
   }, [])

   const bookingList = useSelector(
      (state: RootStateType) => state.booking.bookingList
   )

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
         {bookingList &&
            Object.keys(TimeSlots).map((timeSlotKey) => {
               const bookingsForTimeSlot = bookingList?.filter(
                  (booking: BookingResponse) => booking.timeSlot === timeSlotKey
               )
               return (
                  <Stack {...cfn.box} key={timeSlotKey}>
                     <Stack>
                        <Typography marginBottom={1} fontWeight={600}>
                           {FormatTimeSlot(
                              TimeSlots[timeSlotKey as keyof typeof TimeSlots]
                           )}
                        </Typography>
                        {bookingsForTimeSlot?.map(
                           (booking: BookingResponse) => {
                              if (booking.status !== "requested") {
                                 return (
                                    <Box key={booking.id} marginBottom={1}>
                                       <BookingPreview
                                          onClick={() => {
                                             handleSetIndexBookingDetail(
                                                bookingList,
                                                booking
                                             )
                                             setOpenModal(true)
                                          }}
                                          {...booking}
                                          variant={"team-member"}
                                          onClickAccept={() =>
                                             UpdateBookingHistoryList(
                                                bookingList,
                                                booking.id,
                                                "accepted"
                                             )(dispatch)
                                          }
                                       />
                                    </Box>
                                 )
                              }
                              return null
                           }
                        )}
                     </Stack>

                     {isOpenModal && (
                        <DetailTaskModal
                           isOpen={isOpenModal}
                           handleClose={HandleCloseDetail}
                           bookingIndex={IndexBookingDetail}
                           variant="team-member"
                        />
                     )}
                  </Stack>
               )
            })}
      </Box>
   )
}

export default DailyList

const cfn = {
   box: {
      sx: { spacing: 4, borderBottom: 1, marginBottom: 3, padding: 1 },
   },
}
