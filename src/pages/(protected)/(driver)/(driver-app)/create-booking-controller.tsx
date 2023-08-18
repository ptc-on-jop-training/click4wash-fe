import {Button, Container, Paper, SxProps} from "@mui/material"
import {merge} from "lodash"
import {useDispatch, useSelector} from "react-redux"
import {
   BackStepCreateBooking,
   NextStepCreateBooking,
   PushToBookingList,
   RootStateType,
   SetCreateBookingFromIsOpen
} from "../../../../stores"
import {useEffect, useState} from "react"
import {BookingStatus, VehicleType} from "../../../../services/api"

interface CreateBookingControllerProps
{
   sx?: SxProps
}

function CreateBookingController(props: CreateBookingControllerProps)
{
   const dispatch = useDispatch()
   const {totalStep, currentStep, vehicle, bookingInfo} = useSelector((state: RootStateType) => state.createBookingForm)
   const [isSubmitBtnDisable, setIsSubmitBtnDisable] = useState(true)

   useEffect(() => {
      if (currentStep === 0 && vehicle.id) {
         setIsSubmitBtnDisable(false)
      }
      if (currentStep === 1) {
         setIsSubmitBtnDisable(!Object.entries(bookingInfo).every(([key, value]) => key === "isCharge" || value))
      }
   }, [vehicle.id, bookingInfo.locationId, bookingInfo.timeSlot, bookingInfo.parkingSlotId, bookingInfo.bookedAt])

   const handleOnClickNextStep = () => {
      setIsSubmitBtnDisable(true)
      dispatch(NextStepCreateBooking())
   }

   const handleSubmit = () => {
      dispatch(PushToBookingList({
         id: "string",
         vehicleType: VehicleType.motorcycle,
         vehicleNumberPlate: vehicle.id,
         timeSlot: bookingInfo.timeSlot as any,
         parkingSlotName: "B1",
         address: "",
         status: BookingStatus.requested,
         isCharge: false,

         createdAt: new Date(),
         historyList: []
      }))
      dispatch(SetCreateBookingFromIsOpen(false))
   }

   const handleOnClickBackStep = () => {
      dispatch(BackStepCreateBooking())
      setIsSubmitBtnDisable(false)
   }

   return (
      <Paper {...merge(cfn.paper, {sx: props.sx})}>
         <Container {...cfn.container}>
            <Button {...cfn.backBtn} onClick={handleOnClickBackStep} disabled={currentStep === 0}>Back</Button>
            {
               currentStep === totalStep - 1
                  ? <Button {...cfn.nextBtn} disabled={isSubmitBtnDisable} onClick={handleSubmit}>
                     Finish
                  </Button>
                  : <Button {...cfn.nextBtn} disabled={isSubmitBtnDisable} onClick={handleOnClickNextStep}>
                     Next
                  </Button>
            }
         </Container>
      </Paper>
   )
}

const cfn = {

   paper: {
      elevation: 4
   },

   container: {
      sx: {
         paddingTop: 1.5,
         paddingBottom: 1.5,
         display: "flex",
         justifyContent: "space-between"
      }
   },

   backBtn: {
      size: "medium" as const,
   },

   nextBtn: {
      variant: "contained" as const,
      size: "medium" as const,
   }
}

export default CreateBookingController