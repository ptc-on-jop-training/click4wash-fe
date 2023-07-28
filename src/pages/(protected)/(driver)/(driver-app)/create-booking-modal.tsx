import {Container, IconButton, Modal} from "@mui/material"
import {SectionTitle} from "../../../../components"
import {Close} from "@mui/icons-material"
import {useState} from "react"
import CreateBookingStepper from "./create-booking-stepper.tsx"
import SelectVehicle from "./select-vehicle.tsx"

interface CreateBookingModalProps
{
   isOpen: boolean
   handleClose?: () => void
}

function CreateBookingModal(props: CreateBookingModalProps)
{
   const [step, _] = useState<number>(0)

   const handleCloseModal = () => {
      props.handleClose && props.handleClose()
   }

   return (
      <Modal open={props.isOpen} onClose={handleCloseModal}>
         <Container {...cfn.container}>
            <SectionTitle
               title={"Create Booking"}
               rightSlot={<IconButton onClick={handleCloseModal}><Close/></IconButton>}
            />
            <CreateBookingStepper totalSteps={3} activeStep={step} {...cfn.stepper}/>

            {/*step 0*/}
            <SelectVehicle/>


         </Container>
      </Modal>
   )
}

const cfn = {
   container: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
         border: "none",
         outline: "none",
         overflow: "hidden"
      }
   },

   stepper: {
      sx: {
         marginTop: 1.7,
         marginBottom: 1.7,
         "& .MuiStepLabel-iconContainer": {
            padding: 0
         }
      }
   }
}

export default CreateBookingModal