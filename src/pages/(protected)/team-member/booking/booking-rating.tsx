import { Box, Stack, Typography } from "@mui/material"
import { SectionTitle } from "../../../../components"
import { useState } from "react"
import * as Icons from "@mui/icons-material"
import { BookingResponse } from "../../../../services/api"
import { useDispatch, useSelector } from "react-redux"
import { RootStateType } from "../../../../stores"
import { UpdateRating } from "../../../../stores/booking-store"

const ratingOptions = [
   {
      label: "Very Dissatisfied",
      icon: <Icons.SentimentVeryDissatisfied fontSize="large" />,
      value: 1,
   },
   {
      label: "Dissatisfied",
      icon: <Icons.SentimentDissatisfied fontSize="large" />,
      value: 2,
   },
   {
      label: "Neutral",
      icon: <Icons.SentimentSatisfied fontSize="large" />,
      value: 3,
   },
   {
      label: "Satisfied",
      icon: <Icons.SentimentSatisfiedAlt fontSize="large" />,
      value: 4,
   },
   {
      label: "Very Satisfied",
      icon: <Icons.SentimentVerySatisfied fontSize="large" />,
      value: 5,
   },
]

interface BookingRatingProps {
   variant?: "admin" | "driver" | "team-member"
   booking: BookingResponse
}
const BookingRating = (props: BookingRatingProps) => {
   const dispatch = useDispatch()
   const bookingList = useSelector(
      (state: RootStateType) => state.booking.bookingList
   )
   const rating = props.booking.review?.rating
   const handleRating = (ratingValue: number) => {
      if (rating === 0 && props.variant === "driver") {
         UpdateRating(bookingList, props.booking.id, ratingValue)(dispatch)
      }
   }

   return (
      <Box marginTop={4} borderTop={1} paddingTop={1}>
         <SectionTitle title={"Rating"} />
         <Stack
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction="row"
         >
            {ratingOptions.map((option) => (
               <span
                  key={option.value}
                  style={{
                     color: rating === option.value ? "#ffd72e" : "inherit",
                  }}
                  onClick={() => handleRating(option.value)}
               >
                  {option.icon}
               </span>
            ))}
         </Stack>
         <Typography display="flex" width="100%" justifyContent="center">
            {rating ? ratingOptions[rating-1].label : "Not rated yet"}
         </Typography>
      </Box>
   )
}

export default BookingRating
