import {TableToolbar} from "../../../../components"
import { Button } from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import CreateAccountFormModal from "./create-account-form-modal"

function AccountTableToolBar()
{
   const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState<boolean>(false)
   const handleClose = () => {
      setIsCreateUserFormOpen(false)
   }

   return (
      <TableToolbar leftTool={
         <>
            <Button
               onClick={() => setIsCreateUserFormOpen(true)}
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >new user</Button>
            <CreateAccountFormModal handleClose={handleClose} isOpen={isCreateUserFormOpen}/>
         </>
      }/>
   )
}



export default AccountTableToolBar