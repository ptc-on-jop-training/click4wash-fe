import { Box, Typography } from "@mui/material"

interface BookingLocationProps {
   parkingSlotName: string
   address: string
}
const BookingLocation = (props: BookingLocationProps) => {
   return (
      <Box {...cfn.parkingSlot}>
         <Typography {...cfn.parkingNumber} variant="h1">
            {props.parkingSlotName}
         </Typography>
         <Typography variant="h5">{props.address}</Typography>
      </Box>
   )
}

export default BookingLocation

const cfn = {
   parkingSlot: {
      sx: {
         display: "flex",
         width: "100%",
         flexDirection: "column",
         alignItems: "center",
         bgcolor: "background.default",
         paddingTop: 3,
      },
   },
   parkingNumber: {
      sx: {
         borderBottom: 1,
         marginBottom: 2,
      },
   },
}