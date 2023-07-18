import {
   DialogTitle,
   Dialog,
   DialogActions,
   Button,
   DialogContent,
   TextField, IconButton
} from "@mui/material"
import {useState} from "react"
import {Close} from "@mui/icons-material"

interface CreateUserFormModalProps {
   isOpen: boolean
   handleClose: () => void
}
function AddNewAddressForm(props: CreateUserFormModalProps) {
   const [name,setName]=useState<string>("")
   const [address,setAddress]=useState<string>("")

   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>
         <DialogTitle>Create New Address</DialogTitle>
         <IconButton
            sx={{
               position: 'absolute',
               top: 8,
               right: 8,
               color: (theme) => theme.palette.grey[500],
            }}
            onClick={props.handleClose}
         >
            <Close sx={{ fontSize: '30px' }}/>
         </IconButton>
         <DialogContent>
            <TextField
               value={name}
               onChange={(e)=>{setAddress(e.target.value)}}
               fullWidth required name={"name"}
               margin={"normal"} label={"Name"} type={"text"}/>
            <TextField
               value={address}
               onChange={(e)=>{setName(e.target.value)}}
               fullWidth required name={"address"}
               margin={"normal"} label={"Address"} type={"text"}/>
         </DialogContent>

         <DialogActions>
            <Button variant="contained">
               Send
            </Button>
         </DialogActions>

      </Dialog>
   )
}


export default AddNewAddressForm