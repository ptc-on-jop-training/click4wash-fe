import {Box, Button, Typography} from "@mui/material"
import {BookingStatus, FormatTimeSlot, TimeSlots, VehicleType} from "../../services/api"

interface BookingPreviewProps
{
   variant: "driver" | "team-member"
   onClick?: () => void
   onClickAccept?: () => void

   status: BookingStatus
   vehicleType: VehicleType
   isCharge: boolean
   timeSlot: keyof typeof TimeSlots
   parkingSlotName: string
}

function BookingPreview(props: BookingPreviewProps)
{
   const isAcceptBtnDisplay = props.variant === "team-member" && props.status == BookingStatus.requested
   return (
      <Box {...cfn.container} onClick={props.onClick}>
         <Typography {...cfn.parkingSlot}>{props.parkingSlotName}</Typography>
         <Box {...cfn.center}>
            <Typography {...cfn.infoLine}>&#x2022; {FormatTimeSlot(TimeSlots[props.timeSlot])}</Typography>
            <Typography {...cfn.infoLine}>&#x2022; {props.vehicleType}</Typography>
            {props.isCharge && <Typography {...cfn.infoLine}>&#x2022; charge my car</Typography>}
         </Box>
         <Box {...cfn.left}>
            {isAcceptBtnDisplay && <Button {...cfn.acceptBtn} onClick={(e) => {
               e.stopPropagation()
               props.onClickAccept && props.onClickAccept()
            }}>accept</Button>}
         </Box>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         width: "100%",
         borderRadius: "5px",
         border: "1px solid #9BABB8",
         display: "flex",
         alignItems: "center",
         padding: "10px 0"
      }
   },
   parkingSlot: {
      sx: {
         fontSize: "30px",
         margin: "0 50px",
         fontWeight: "bold"
      }
   },

   center: {
      sx: {
         width: "100%",
      }
   },
   infoLine: {
      sx: {
         textDecorationStyle: "dotted",
         fontSize: "15px",
      }
   },


   acceptBtn: {
      variant: "contained" as const,
      size: "small" as const,
      sx: {
         fontSize: "12px",
         margin: "0 10px"
      }
   },

   left: {
      sx: {
      }
   }
}

export default BookingPreview