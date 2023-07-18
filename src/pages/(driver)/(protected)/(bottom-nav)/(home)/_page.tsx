import {Box, Stack, Typography} from "@mui/material"
import {BookingRequest, SectionHeader} from "../../../../../components"

function HomePage()
{
   return (
      <Stack spacing={3}>
         <Box>
            <SectionHeader
               left={<Typography fontWeight={"bold"}>Current Booking</Typography>}
            />
            <Stack spacing={1.5}>
               {/*<Box sx={{display: "flex", alignItems: "center", gap: 0.5, marginBottom: 0.5}}>*/}
               {/*   <ErrorOutline fontSize={"small"}/>*/}
               {/*   <Typography variant={"body2"}>there are no current booking</Typography>*/}
               {/*</Box>*/}
               <BookingRequest/>
               <BookingRequest/>
            </Stack>
         </Box>
         <Box>
            <SectionHeader
               left={<Typography fontWeight={"bold"}>Booking History</Typography>}
            />
            <Stack spacing={1.5}>
               {/*<Box sx={{display: "flex", alignItems: "center", gap: 0.5, marginBottom: 0.5}}>*/}
               {/*   <ErrorOutline fontSize={"small"}/>*/}
               {/*   <Typography variant={"body2"}>there are no booking history</Typography>*/}
               {/*</Box>*/}
               <BookingRequest/>
               <BookingRequest/>
               <BookingRequest/>
               <BookingRequest/>
               <BookingRequest/>
               <BookingRequest/>
               <BookingRequest/>
            </Stack>
         </Box>
      </Stack>
   )
}

// const cfn = {
//
// }

export default HomePage