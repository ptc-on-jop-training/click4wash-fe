import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import CreateNewLocationFrom from "./create-new-location-form.tsx"
import {useState} from "react"
import {useTranslation} from "react-i18next"

function LocationToolBar() {
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
               {t("admin.LocationTable.LocationTableToolBar.newLocation")}
            </Button>
            <CreateNewLocationFrom handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}


export default LocationToolBar