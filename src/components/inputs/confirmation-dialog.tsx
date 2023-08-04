import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material"

interface ConfirmationDialogProps {

   open: boolean;
   onClose: () => void;
   onConfirm: () => void;
   title: string;
   message: string;

}



function ConfirmationDialog(props: ConfirmationDialogProps) {

   return (

      <Dialog open={props.open} onClose={props.onClose}>

         <DialogTitle>{props.title}</DialogTitle>

         <DialogContent>

            <DialogContentText>

               {props.message}

            </DialogContentText>

         </DialogContent>

         <DialogActions>

            <Button onClick={props.onClose} color="primary">
               Cancel
            </Button>

            <Button onClick={props.onConfirm} color="primary">
               Ok
            </Button>

         </DialogActions>

      </Dialog>

   )

}



export default ConfirmationDialog
