import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   FormHelperText,
   MenuItem,
   Select,
   TextField
} from "@mui/material"

interface CreateUserFormModalProps
{
   isOpen: boolean
   handleClose: () => void
}
function CreateAccountFormModel(props:CreateUserFormModalProps) {
   return (
      <Dialog open={props.isOpen} onClose={props.handleClose}>
         <DialogTitle>Create New Account</DialogTitle>
         <DialogContent>
            <Select
               label="Role" required
               fullWidth margin={"dense"}
               value={"team-member"}
            >
               <MenuItem value={"team-member"}>team-member</MenuItem>
            </Select>
            <FormHelperText>The admin just allow create Team Member</FormHelperText>
            <TextField fullWidth required name={"email"}
               margin={"dense"} label={"Full Name"} type={"text"}/>
            <TextField fullWidth required name={"email"}
               margin={"dense"} label={"Email"} type={"text"}/>
            <TextField fullWidth required name={"email"}
               margin={"dense"} label={"Phone Number"} type={"text"}/>

         </DialogContent>
         <DialogActions>
            <Button onClick={props.handleClose}  color="secondary">
               Cancel
            </Button>
            <Button  variant={"contained"} color="primary">
               Submit
            </Button>
         </DialogActions>
      </Dialog>
   )
}
export default CreateAccountFormModel