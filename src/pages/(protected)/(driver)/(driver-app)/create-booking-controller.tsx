import {Button, Container, Paper, SxProps} from "@mui/material"
import {merge} from "lodash"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType, NextStepCreateBooking, BackStepCreateBooking} from "../../../../stores"

interface CreateBookingControllerProps
{
   sx?: SxProps
}

function CreateBookingController(props: CreateBookingControllerProps)
{
   const dispatch = useDispatch()
   const {totalStep, currentStep} = useSelector((state: RootStateType) => state.createBookingForm)

   const handleOnClickNextStep = () => {
      dispatch(NextStepCreateBooking())
   }

   const handleOnClickBackStep = () => {
      dispatch(BackStepCreateBooking())
   }

   return (
      <Paper {...merge(cfn.paper, {sx: props.sx})}>
         <Container {...cfn.container}>
            <Button {...cfn.backBtn} onClick={handleOnClickBackStep} disabled={currentStep === 0}>Back</Button>
            {
               currentStep === totalStep - 1
                  ? <Button {...cfn.nextBtn} onClick={handleOnClickNextStep}>
                     Finish
                  </Button>
                  : <Button {...cfn.nextBtn} onClick={handleOnClickNextStep}>
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