import {
   LocalParking,
   BackHand,
   NoCrash,
   PostAdd,
   CheckCircleOutline,
} from "@mui/icons-material"
import {
   Timeline,
   TimelineItem,
   TimelineSeparator,
   TimelineConnector,
   TimelineContent,
   TimelineDot,
   timelineItemClasses,
} from "@mui/lab"
import { Box, Chip, Stack, Typography } from "@mui/material"
import { BookingHistory } from "../../../../services/api"
import { getTime } from "../../../../components/utils/format-date-time"

interface BookingTimeLineProps {
   bookingHistoryList: BookingHistory[]
   bookingStatus: string
   isCharge: boolean
}

const BookingTimeLine = (props: BookingTimeLineProps) => {
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
                  <TimelineConnector />
                  <TimelineDot
                     color={
                        props.bookingStatus === "requested" ? "primary" : "grey"
                     }
                  >
                     <PostAdd />
                  </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent sx={{ py: "1px", px: 2 }}>
                  <Typography variant="h6" component="span">
                     Requested
                  </Typography>
                  <Typography>
                     {getTime(props.bookingHistoryList[0].createdAt.toString())}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                     <Typography>Require:</Typography>
                     <Chip label="Wash" color="primary" />
                     {props.isCharge && <Chip label="Charge" color="success" />}
                  </Stack>
               </TimelineContent>
            </TimelineItem>
            {props.bookingStatus === "refused" ? (
               <TimelineItem>
                  <TimelineSeparator>
                     <TimelineConnector />
                     <TimelineDot
                        color={
                           props.bookingStatus === "refused"
                              ? "primary"
                              : "grey"
                        }
                     >
                        <BackHand />
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "18px", px: 2 }}>
                     <Typography variant="h6" component="span">
                        Refused
                     </Typography>

                     <Typography>
                        {getTime(
                           props.bookingHistoryList[1].createdAt.toString()
                        )}
                     </Typography>
                     <Stack direction={"row"}>
                        <Typography marginRight={1} fontWeight={700}>
                           Reason:
                        </Typography>
                        <Typography>
                           {props.bookingHistoryList[1].comment}
                        </Typography>
                     </Stack>
                  </TimelineContent>
               </TimelineItem>
            ) : (
               <>
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot
                           color={
                              props.bookingStatus === "accepted"
                                 ? "primary"
                                 : "grey"
                           }
                        >
                           <CheckCircleOutline />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "18px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Accepted
                        </Typography>
                        {props.bookingHistoryList[1] && (
                           <Typography>
                              {getTime(
                                 props.bookingHistoryList[1].createdAt.toString()
                              )}
                           </Typography>
                        )}
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot
                           color={
                              props.bookingStatus === "processing"
                                 ? "primary"
                                 : "grey"
                           }
                        >
                           <LocalParking />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "18px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Processing
                        </Typography>
                        <Typography>
                           {props.bookingHistoryList[2] && (
                              <Typography>
                                 {getTime(
                                    props.bookingHistoryList[2].createdAt.toString()
                                 )}
                              </Typography>
                           )}
                        </Typography>
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot
                           color={
                              props.bookingStatus === "done"
                                 ? "primary"
                                 : "grey"
                           }
                        >
                           <NoCrash />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "18px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Done
                        </Typography>
                        {props.bookingStatus === "done" && (
                           <Typography>
                              {getTime(
                                 props.bookingHistoryList[2].createdAt.toString()
                              )}
                           </Typography>
                        )}
                     </TimelineContent>
                  </TimelineItem>
               </>
            )}
         </Timeline>
      </Box>
   )
}

export default BookingTimeLine
