import {Box, Stack} from "@mui/material"
import {BookingPreview, SectionTitle} from "../../../../../components"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../../stores"
import {BookingStatus} from "../../../../../services/api"

function HomePage()
{
   const bookingList = useSelector((state: RootStateType) => state.booking.bookingList)

   return (
      <Box {...cfn.container}>
         <Stack {...cfn.curBookingCont}>
            <SectionTitle {...cfn.bookingTitle} title={"Current Booking"}/>
            <Stack {...cfn.bookingStack}>
               {bookingList?.filter(booking => !(booking.status === BookingStatus.refused || booking.status === BookingStatus.done)).map((booking, ind) => (
                  <BookingPreview variant={"driver"} {...booking} key={ind}/>
               ))}
            </Stack>
         </Stack>
         <Stack>
            <SectionTitle {...cfn.bookingTitle} title={"Booking History"}/>
            <Stack {...cfn.bookingStack}>
               {bookingList?.filter(booking => booking.status === BookingStatus.refused || booking.status === BookingStatus.done).map((booking, ind) => (
                  <BookingPreview variant={"driver"} {...booking} key={ind}/>
               ))}
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