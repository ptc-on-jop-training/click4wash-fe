import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {TableToolBar} from "../../../../../components"
import AddNewAddressForm from "./add-new-address-form.tsx"
import {useState} from "react"

function AddressToolBar() {
   const [isCreateUserFormOpen, setIsCreateUserFormOpen] = useState<boolean>(false)

   const handleClose = () => {
      setIsCreateUserFormOpen(false)
   }

   return (
      <TableToolBar leftTool={
         <>
            <Button
               onClick={() => setIsCreateUserFormOpen(true)}
               {...cfn.button}
               startIcon={<AddBox sx={{color: "white"}}/>}
            >
               new Address
            </Button>
            <AddNewAddressForm handleClose={handleClose} isOpen={isCreateUserFormOpen}/>
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

export default AddressToolBar