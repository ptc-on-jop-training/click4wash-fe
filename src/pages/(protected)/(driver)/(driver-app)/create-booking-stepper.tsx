import {Step, Stepper, StepLabel, SxProps} from "@mui/material"

interface CreateBookingStepper
{
   activeStep: number
   totalSteps: number
   sx?: SxProps
}

function CreateBookingStepper(props: CreateBookingStepper)
{
   return (
      <Stepper sx={props.sx} activeStep={props.activeStep}>
         {Array(props.totalSteps).fill(0).map((_, ind) => (<Step key={ind}>
            <StepLabel/>
         </Step>))}
      </Stepper>
   )
}

export default CreateBookingStepper