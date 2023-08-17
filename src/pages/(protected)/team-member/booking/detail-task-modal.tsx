import {
   Box, 
   Container,
   IconButton,
   Modal,


} from "@mui/material"
import { ReactNode } from "react"
import { SectionTitle } from "../../../../components"
import { Close,  } from "@mui/icons-material"


import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import LaptopMacIcon from "@mui/icons-material/LaptopMac"
import HotelIcon from "@mui/icons-material/Hotel"
import RepeatIcon from "@mui/icons-material/Repeat"
import Typography from "@mui/material/Typography"

interface DetailTaskModalProps {
   isOpen: boolean
   handleClose?: () => void
   task: ReactNode
   variant?: "default" | "driver" | "team-member"
}

const DetailTaskModal = (props: DetailTaskModalProps) => {
   return (
      <Modal open={props.isOpen} onClose={props.handleClose}>
         <Container {...cfn.box}>
            <SectionTitle
               title={"Detail Booking"}
               rightSlot={
                  <IconButton onClick={props.handleClose}>
                     <Close />
                  </IconButton>
               }
            />
            {/* {props.task} */}
            <Box>
               <Box>
                  <Typography>14:15, July 25</Typography>
               </Box>
               <Box {...cfn.parkingSlot}>
                  <Typography {...cfn.parkingNumber} variant="h1">
                     8b
                  </Typography>
                  <Typography variant="h5">500 Cộng Hòa</Typography>
               </Box>
            </Box>
            {/* <Box>
               <Stack direction="row" spacing={2}>
                  <Typography variant="h5">Request</Typography>
                  <Chip label="Wash" color="primary" variant="filled" />
               </Stack>
               <Stack direction="row" spacing={2}>
                  <Typography variant="h5">Status</Typography>
                  <Chip label="Done" color="primary" variant="filled" />
               </Stack>
            </Box> */}

            <Box>
               <Timeline >
                  <TimelineItem>
                     <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                     >
                        9:30 am
                     </TimelineOppositeContent>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                           <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                     <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="text.secondary"
                     >
                        10:00 am
                     </TimelineOppositeContent>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                           <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                           <HotelIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                           <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                           Repeat
                        </Typography>
                        <Typography>
                           Because this is the life you love!
                        </Typography>
                     </TimelineContent>
                  </TimelineItem>
               </Timeline>
            </Box>
         </Container>
      </Modal>
   )
}

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
      },
   },
   parkingSlot: {
      sx: {
         display: "flex",
         width: "100%",
         flexDirection: "column",
         alignItems: "center",
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
      },
   },
   parkingNumber: {
      sx: {
         borderBottom: 1,
         marginBottom: 2,
      },
   },
}
export default DetailTaskModal
