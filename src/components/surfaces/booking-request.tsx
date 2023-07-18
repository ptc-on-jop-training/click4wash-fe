import {Box} from "@mui/material"

function BookingRequest()
{
   return (
      <Box {...cfn.container}>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         width: "100%",
         height: "90px",
         borderRadius: "5px",
         border: "1px solid #9BABB8"
      }
   }
}

export default BookingRequest