import {
   DialogTitle,
   Dialog,
   DialogActions,
   Button,
   DialogContent,
   TextField, IconButton, Typography
} from "@mui/material"
import {useState} from "react"
import {Close} from "@mui/icons-material"

interface CreateUserFormModalProps {
   isOpen: boolean
   handleClose: () => void
}

function AddNewAddressForm(props: CreateUserFormModalProps) {
   const [name, setName] = useState<string>("")
   const [address, setAddress] = useState<string>("")

   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>
         <DialogTitle>
            <Typography variant="h5" gutterBottom>Create New Address</Typography>
            <IconButton
               {...cfn.iconClose}
               onClick={props.handleClose}
            >
               <Close sx={{fontSize: '30px'}}/>
            </IconButton>
         </DialogTitle>

         <DialogContent>
            <TextField
               value={name}
               onChange={(e) => {
                  setAddress(e.target.value)
               }}
               fullWidth required name={"name"}
               margin={"normal"} label={"Name"} type={"text"}/>
            <TextField
               value={address}
               onChange={(e) => {
                  setName(e.target.value)
               }}
               fullWidth required name={"address"}
               margin={"normal"} label={"Address"} type={"text"}/>
         </DialogContent>

         <DialogActions>
            <Button {...cfn.btnCreate}>
               Create
            </Button>
         </DialogActions>

      </Dialog>
   )
}

const cfn = {
   iconClose: {
      sx: {
         position: 'absolute',
         top: 8,
         right: 8,
      }
   },
   btnCreate: {
      sx: {
         marginBottom: 2
      },
      variant: "contained" as const,
      size: 'medium' as const
   }
}

export default AddNewAddressForm