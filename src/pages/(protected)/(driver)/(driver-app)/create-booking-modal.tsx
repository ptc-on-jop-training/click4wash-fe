import {Container, IconButton, Modal} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {SectionTitle} from "../../../../components"
import {Close} from "@mui/icons-material"
import {ResetCreateBookingForm, RootStateType} from "../../../../stores"
import CreateBookingStepper from "./create-booking-stepper.tsx"
import BookingInfoForm from "./booking-info-form.tsx"
import VehicleSelector from "./vehicle-selector.tsx"
import CreateBookingController from "./create-booking-controller.tsx"

interface CreateBookingModalProps
{
   isOpen: boolean
   handleClose?: () => void
   onClick?: () => void
}

function CreateBookingModal(props: CreateBookingModalProps)
{
   const dispatch = useDispatch()
   const {currentStep, totalStep} = useSelector((state: RootStateType) => state.createBookingForm)

   const handleCloseModal = () => {
      dispatch(ResetCreateBookingForm())
      props.handleClose && props.handleClose()
   }

   return (
      <Modal open={props.isOpen} onClose={handleCloseModal}>
         <Container {...cfn.container}>

            <SectionTitle
               title={"Create Booking"}
               rightSlot={<IconButton onClick={handleCloseModal}><Close/></IconButton>}
            />
            <CreateBookingStepper totalSteps={totalStep} activeStep={currentStep} {...cfn.stepper}/>

            {currentStep === 0 ? <VehicleSelector/> : null}
            {currentStep === 1 ? <BookingInfoForm/> : null}

            <CreateBookingController {...cfn.controller}/>

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
         overflow: "hidden",
      }
   },

   stepper: {
      sx: {
         margin: "auto",
         width: "50%",
         marginTop: 1.7,
         marginBottom: 1.7,
         "& .MuiStepLabel-iconContainer": {
            padding: 0
         }
      }
   },

   controller: {
      sx: {
         position: "fixed",
         bottom: 0,
         left: 0,
         right: 0
      }
   }
}

export default CreateBookingModal