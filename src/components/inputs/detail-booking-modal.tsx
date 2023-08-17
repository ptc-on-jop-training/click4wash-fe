import { SectionTitle } from ".."
import { Container, IconButton, Modal, Stack, Typography } from "@mui/material"
import { Close } from "@mui/icons-material"
import {
   BookingRating,
   BookingComment,
   BookingLocation,
   BookingTimeLine,
   TeamMemberHandleBooking,
} from "../../pages/(protected)/team-member/booking"
import { useSelector } from "react-redux"
import { RootStateType } from "../../stores"
import { getDay } from "../utils/format-date-time"

interface DetailTaskModalProps {
   isOpen: boolean
   handleClose?: () => void
   bookingIndex: number
   variant?: "admin" | "driver" | "team-member"
}

const DetailTaskModal = (props: DetailTaskModalProps) => {
   const bookingDetail = useSelector(
      (state: RootStateType) => state.booking.bookingList?.[props.bookingIndex]
   )
   const variant = "team-member"
   return (
      <Modal open={props.isOpen} onClose={props.handleClose}>
         <Container {...cfn.box}>
            <SectionTitle
               title={"Detail Booking"}
               rightSlot={
                  <IconButton onClick={props.handleClose}>
                     <Close />
                  </IconButton>
               }
            />
            <Stack marginLeft={2}>
               <Typography>
                  {getDay(bookingDetail.createdAt.toString())}
               </Typography>
               <Stack direction={"row"}>
                  <Typography>{bookingDetail.vehicleType.toUpperCase()}:</Typography>
                  <Typography marginLeft={1} fontWeight={600}>{bookingDetail.vehicleNumberPlate}</Typography>
               </Stack>
            </Stack>
            <BookingLocation
               address={bookingDetail.address}
               parkingSlotName={bookingDetail.parkingSlotName}
            />

            <BookingTimeLine
               bookingHistoryList={bookingDetail.historyList}
               bookingStatus={bookingDetail.status}
               isCharge={bookingDetail.isCharge}
            />

            {props.variant === variant && (
               <TeamMemberHandleBooking
                  variant={variant}
                  bookingDetail={bookingDetail}
               />
            )}

            {(bookingDetail.status === "done" ||
               bookingDetail.status === "refused") && (
               <>
                  <BookingComment booking={bookingDetail} variant={variant} />
                  <BookingRating booking={bookingDetail} variant={variant} />
               </>
            )}
         </Container>
      </Modal>
   )
}

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
         width: "100%",
         overflow: "auto",
      },
   },
}
export default DetailTaskModal
