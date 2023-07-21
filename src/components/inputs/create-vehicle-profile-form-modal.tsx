import {Container, FormGroup, IconButton, Modal, TextField} from "@mui/material"
import {SectionTitle} from "../index.ts"
import {Close} from '@mui/icons-material'

interface CreateVehicleProfileFormModalProps
{
   isOpen: boolean
   handleClose?: () => void
}

function CreateVehicleProfileFormModal(props: CreateVehicleProfileFormModalProps)
{
   return (
      <Modal open={props.isOpen} onClose={props.handleClose}>
         <Container {...cfn.box}>
            <SectionTitle
               title={"Vehicle Information"}
               rightSlot={<IconButton onClick={props.handleClose}><Close/></IconButton>}
            />
            <FormGroup {...cfn.form}>
               <TextField label={"ID"} {...cfn.idField}/>
            </FormGroup>
         </Container>
      </Modal>
   )
}

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%"
      }
   },

   title: {
      variant: "h6" as const
   },

   form: {
      sx: {
         width: "100%",
         marginTop: 2
      }
   },
   idField: {
      fullWidth: true
   }
}

export default CreateVehicleProfileFormModal