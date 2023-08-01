import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material"

interface DeleteConfirmationDialogProps {
   open: boolean
   onClose:() => void
   onClick: () => void
}

function CreateFormConfirmDeleteAccount(props: DeleteConfirmationDialogProps) {
   return (
      <Dialog open={props.open} onClose={props.onClose}>
         <DialogTitle>Confirm Delete Account</DialogTitle>
         <DialogContent>
            <DialogContentText>
               Are you sure you want to delete account?
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={props.onClose} color="primary">
               Cancel
            </Button>
            <Button onClick={props.onClick}  color="primary">
               Ok
            </Button>
         </DialogActions>
      </Dialog>
   )
}

export default CreateFormConfirmDeleteAccount
