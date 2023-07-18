import {TableToolBar} from "../../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import CreateAccountFormModel from "./create-account-form-model.tsx"

function AccountToolbar() {
   const [isCreateAccountFormOpen, setIsCreateAccountFormOpen] = useState<boolean>(false)
   const handleClose = () => {
      setIsCreateAccountFormOpen(false)
   }
   return (
      <TableToolBar leftTool={
         <>
            <Button
               onClick={() => setIsCreateAccountFormOpen(true)}
               {...cfn.button}
               startIcon={<AddBox sx={{color: "white"}}/>}
            >
               new Account
            </Button>
            <CreateAccountFormModel handleClose={handleClose} isOpen={isCreateAccountFormOpen}/>
         </>
      }/>
   )
}

const cfn = {
   button: {
      size: "small" as const,
      variant: "contained" as const,
   }
}

export default AccountToolbar