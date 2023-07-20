import {Box, Stack} from "@mui/material"
import {BookingPreview, SectionTitle} from "../../../../../components"

function HomePage()
{
   return (
      <Box {...cfn.container}>
         <Stack {...cfn.curBookingCont}>
            <SectionTitle {...cfn.bookingTitle} title={"Current Booking"}/>
            <Stack {...cfn.bookingStack}>
               <BookingPreview/>
            </Stack>
         </Stack>
         <Stack>
            <SectionTitle {...cfn.bookingTitle} title={"Booking History"}/>
            <Stack {...cfn.bookingStack}>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
               <BookingPreview/>
            </Stack>
         </Stack>
      </Box>
   )
}

const cfn = {
   container: {

   },

   curBookingCont: {
      sx: {
         marginBottom: 2.5
      }
   },

   bookingTitle: {
      sx: {
         marginBottom: 1
      }
   },
   bookingStack: {
      spacing: 1
   }
}

export default HomePage