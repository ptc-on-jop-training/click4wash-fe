import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material"

interface StatusConfirmationDialogProps {
   open: boolean
   onClose:() => void
   onClick: () => void
}

function CreateFormConfirmChangeStatus(props: StatusConfirmationDialogProps) {
   return (
      <Dialog open={props.open} onClose={props.onClose}>
         <DialogTitle>Confirm Status Change</DialogTitle>
         <DialogContent>
            <DialogContentText>
               Are you sure you want to change the status?
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

export default CreateFormConfirmChangeStatus
