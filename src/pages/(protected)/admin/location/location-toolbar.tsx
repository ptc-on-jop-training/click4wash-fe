import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import CreateNewLocationFrom from "./create-new-location-form.tsx"
import {useState} from "react"
function LocationToolBar() {
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
                    new location
            </Button>
            <CreateNewLocationFrom handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}


export default LocationToolBar