import {Box, Button, Stack} from "@mui/material"
import {CreateVehicleProfileFormModal, SectionTitle, VehicleCard} from "../../../../../components"
import VehicleListEmpty from "./vehicle-list-empty.tsx"
import {useState} from "react"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../../stores"
import {VehicleResponse} from "../../../../../services/api"

function VehiclePage()
{
   const [isCreateCarFormOpen, setIsCreateCarFormOpen] = useState<boolean>(false)
   const vehicleList = useSelector((state: RootStateType) => state.vehicle.vehicleList)

   const renderVehicleList = () => {
      return (
         <Stack spacing={1}>
            {vehicleList?.map((vehicle: VehicleResponse) => (<VehicleCard {...vehicle} key={vehicle.id}/>))}
         </Stack>
      )
   }

   return (
      <Box>
         <SectionTitle
            title={"My Vehicles"}
            rightSlot={<Button
               {...cfn.rightTitleBtn}
               onClick={() => setIsCreateCarFormOpen(true)}>new</Button>}/>
         {
            vehicleList == null || vehicleList.length === 0
               ? <VehicleListEmpty onClickAddNewBtn={() => setIsCreateCarFormOpen(true)}/>
               : renderVehicleList()
         }

         <CreateVehicleProfileFormModal
            variant={"new"}
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
         display: "inline",
         minHeight: 0,
         minWidth: 0,
      }
   }
}

export default VehiclePage