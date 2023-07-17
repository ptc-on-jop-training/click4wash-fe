import {TableToolBar} from "../../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import  {useState} from "react"
import CreateAccountFormModel from "./create-account-form -model.tsx"

function AccountToolbar(){
   const [isCreateAccountFormOpen, setIsCreateAccountFormOpen] = useState<boolean>(false)
   const handleClose = () => {
      setIsCreateAccountFormOpen(false)
   }

   return(
      <TableToolBar leftTool={
         <>
            <Button 
               onClick={() => setIsCreateAccountFormOpen(true)}
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >new Account</Button>
            <CreateAccountFormModel handleClose={handleClose} isOpen={isCreateAccountFormOpen}/>
         </>
      }/>
   )
}
export default AccountToolbar