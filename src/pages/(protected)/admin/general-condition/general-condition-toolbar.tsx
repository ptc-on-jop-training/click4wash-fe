import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import FormCreateGeneralCondition from "./form-create-general-condition.tsx"

function GeneralConditionsToolbar() {
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
            >new new general condition</Button>
            <FormCreateGeneralCondition handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}

export default GeneralConditionsToolbar