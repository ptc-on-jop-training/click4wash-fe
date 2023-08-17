import { LocalParking, LocalCarWash, Logout } from "@mui/icons-material"
import {
   Timeline,
   TimelineItem,
   TimelineSeparator,
   TimelineConnector,
   TimelineContent,
   TimelineDot,
   timelineItemClasses,
} from "@mui/lab"
import { Box, Typography } from "@mui/material"

const BookingStatus = () => {
   return (
      <Box>
         <Timeline
            sx={{
               [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
               },
            }}
         >
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot>
                     <LocalParking />
                  </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                     Request
                  </Typography>
                  <Typography>14:15, July 25</Typography>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                     <LocalCarWash />
                  </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                     Accept
                  </Typography>
                  <Typography>Waiting</Typography>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                     <Logout />
                  </TimelineDot>
               </TimelineSeparator>
               <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                     Done
                  </Typography>
                  <Typography>19:00, July 25</Typography>
               </TimelineContent>
            </TimelineItem>
         </Timeline>
      </Box>
   )
}

export default BookingStatus
