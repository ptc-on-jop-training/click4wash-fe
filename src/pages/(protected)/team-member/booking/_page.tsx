import { Box    } from "@mui/material"
import DailyList from "./daily-list"
import { SectionTitle } from "../../../../components"

const BookingPage = () => {
   
   return (
      <Box>
         <SectionTitle title={"Booking Page"} />
         <DailyList />
      </Box>
   )
}

export default BookingPage