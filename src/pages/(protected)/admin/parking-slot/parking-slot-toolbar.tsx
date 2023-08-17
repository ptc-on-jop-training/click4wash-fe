import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import CreateParkingSlotFrom from "./create-parking-slot-form.tsx"
import {useTranslation} from "react-i18next"

function ParkingSlotToolBar() {
   const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false)

   const [t] = useTranslation('trans')
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
               {t("admin.ParkingSlot.ParkingSlotTableToolBar.newParkingSlot")}
            </Button>
            <CreateParkingSlotFrom handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}

export default ParkingSlotToolBar