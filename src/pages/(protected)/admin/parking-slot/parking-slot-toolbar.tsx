import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import CreateParkingSlotFrom from "./create-parking-slot-form.tsx"

function ParkingSlotToolBar() {
   const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false)

   const handleClose = () => {
      setIsCreateFormOpen(false)
   }

   return (
      <TableToolbar leftTool={
         <>
            <Button
               onClick={() => setIsCreateFormOpen(true)}
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >
               new parking slot
            </Button>
            <CreateParkingSlotFrom handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}


export default ParkingSlotToolBar