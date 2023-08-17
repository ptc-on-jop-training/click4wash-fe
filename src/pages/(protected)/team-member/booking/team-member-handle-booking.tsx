import React, { useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"
import { useSelector } from "react-redux"
import { RootStateType, useRootDispatch } from "../../../../stores"
import { UpdateBookingHistoryList } from "../../../../stores/booking-store"
import { BookingResponse } from "../../../../services/api"

interface TeamMemberHandleBookingProps {
   bookingDetail: BookingResponse
   variant?: "admin" | "driver" | "team-member"
}

const TeamMemberHandleBooking = ({
   bookingDetail,
   variant,
}: TeamMemberHandleBookingProps) => {
   const dispatch = useRootDispatch()
   const bookingList = useSelector(
      (state: RootStateType) => state.booking.bookingList
   )
   const [rejectReason, setRejectReason] = useState("")
   const [isOpenReject, setOpenReject] = useState(false)

   const HandleUpdateStatus = (status: string, comment?: string) => {
      if (bookingList) {
         UpdateBookingHistoryList(
            bookingList,
            bookingDetail.id,
            status,
            comment
         )(dispatch)
      }
   }

   const handleRejectBooking = () => {
      if (rejectReason) {
         HandleUpdateStatus("refused", rejectReason)
      }
   }

   if (variant !== "team-member" || !bookingList) {
      return null
   }

   const isRequested = bookingDetail.status === "requested"
   const isAccepted = bookingDetail.status === "accepted"
   const isProcessing = bookingDetail.status === "processing"
   const isRefused = bookingDetail.status === "refused"

   return (
      <Box>
         <Stack spacing={2}>
            <Stack spacing={2}>
               {!isAccepted && isRequested && !isOpenReject && (
                  <Button
                     variant="contained"
                     onClick={() => HandleUpdateStatus("accepted")}
                  >
                     accept
                  </Button>
               )}

               {isAccepted && (
                  <Button
                     variant="contained"
                     onClick={() => HandleUpdateStatus("processing")}
                  >
                     mark as processing
                  </Button>
               )}
               {isProcessing && (
                  <Button
                     variant="contained"
                     onClick={() => HandleUpdateStatus("done")}
                  >
                     mark as done
                  </Button>
               )}

               {!isAccepted && isRequested && !isOpenReject && (
                  <Button
                     variant="outlined"
                     onClick={() => setOpenReject(true)}
                  >
                     reject
                  </Button>
               )}
            </Stack>

            {!isRefused && isOpenReject && (
               <Stack spacing={2}>
                  <TextField
                     sx={{
                        width: "100%",
                     }}
                     error={!rejectReason}
                     id="outlined-basic"
                     label="Reason for reject"
                     variant="outlined"
                     value={rejectReason}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRejectReason(event.target.value)
                     }}
                  />
                  <Button variant="contained" onClick={handleRejectBooking}>
                     send
                  </Button>
                  <Button
                     variant="outlined"
                     onClick={() => setOpenReject(false)}
                  >
                     cancel
                  </Button>
               </Stack>
            )}
         </Stack>
      </Box>
   )
}

export default TeamMemberHandleBooking
