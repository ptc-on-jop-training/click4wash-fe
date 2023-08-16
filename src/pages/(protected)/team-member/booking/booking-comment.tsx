import { Avatar, Button, Stack, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { BookingResponse } from "../../../../services/api"
import { SectionTitle } from "../../../../components"
import { useState } from "react"
import { UpdateComment } from "../../../../stores/booking-store"
import { RootStateType } from "../../../../stores"
import { useDispatch, useSelector } from "react-redux"

interface BookingCommentProps {
   booking: BookingResponse
   variant?: "admin" | "driver" | "team-member"
}

const BookingComment = (props: BookingCommentProps) => {
   const dispatch = useDispatch()
   const [comment, setComment] = useState("")
   const bookingList = useSelector(
      (state: RootStateType) => state.booking.bookingList
   )

   const handleComment = () => {
      if (comment) {
         UpdateComment(bookingList, props.booking.id, comment)(dispatch)
         setComment("")
      }
   }
   return (
      <Box marginTop={3} borderTop={1} paddingTop={1}>
         <SectionTitle title={"Comment"} />

         {props.variant === "driver" &&
            props.booking.review?.comment === "" && (
            <Stack spacing={2} marginBottom={3}>
               <Stack spacing={2}>
                  <TextField
                     sx={{
                        width: "100%",
                     }}
                     id="outlined-basic"
                     label="Comment"
                     variant="outlined"
                     value={comment}
                     onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                     ) => {
                        setComment(event.target.value)
                     }}
                  />
                  <Button variant="contained" onClick={handleComment}>
                     send
                  </Button>
               </Stack>
            </Stack>
         )}
         <Box marginLeft={2} marginTop={2}>
            {props.booking.review?.comment && (
               <Stack direction={"row"} marginBottom={2}>
                  <Avatar
                     sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "blueviolet",
                     }}
                  >
                     Dr
                  </Avatar>
                  <Stack marginLeft={1}>
                     <Typography> {props.booking.review?.comment}</Typography>
                  </Stack>
               </Stack>
            )}
         </Box>
      </Box>
   )
}
export default BookingComment
