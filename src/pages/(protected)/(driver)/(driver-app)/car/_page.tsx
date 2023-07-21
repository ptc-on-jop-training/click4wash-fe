import {Box, Button} from "@mui/material"
import {CreateVehicleProfileFormModal, SectionTitle} from "../../../../../components"
import CarListEmpty from "./car-list-empty.tsx"
import {useState} from "react"

function CarPage()
{
   const [isCreateCarFormOpen, setIsCreateCarFormOpen] = useState<boolean>(false)

   return (
      <Box>
         <SectionTitle
            title={"My Cars"}
            rightSlot={<Button
               {...cfn.rightTitleBtn}
               onClick={() => setIsCreateCarFormOpen(true)}>add new</Button>}/>

         <CarListEmpty onClickAddNewBtn={() => setIsCreateCarFormOpen(true)}/>

         <CreateVehicleProfileFormModal
            isOpen={isCreateCarFormOpen}
            handleClose={() => setIsCreateCarFormOpen(false)}/>
      </Box>
   )
}

const cfn = {
   rightTitleBtn: {
      sx: {
         padding: "0 7px",
         textTransform: "capitalize",
         fontWeight: "bold",
         textDecoration: "underline",
         display: "inline",
         minHeight: 0,
         minWidth: 0,
      }
   }
}

export default CarPage