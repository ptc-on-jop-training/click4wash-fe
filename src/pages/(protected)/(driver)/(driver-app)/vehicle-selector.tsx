import {Box, Stack} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType, SetCreateBookingFromDataVehicle} from "../../../../stores"
import {SectionTitle, VehicleCard} from "../../../../components"

function VehicleSelector()
{
   const dispatch = useDispatch()
   const vehicleList = useSelector((state: RootStateType) => state.vehicle.vehicleList)
   const selectedVehicleId = useSelector((state: RootStateType) => state.createBookingForm.vehicle.id)

   const handleOnSelectVehicle = (id: string) => {
      dispatch(SetCreateBookingFromDataVehicle({vehicleId: id}))
   }

   return (
      <Box {...cfn.container}>
         <SectionTitle title={"Select a vehicle"} {...cfn.title}/>
         <Stack {...cfn.box}>
            {vehicleList?.map((vehicle) => (
               <VehicleCard
                  variant={selectedVehicleId === vehicle.id ? "highlight" : "primary"}
                  onClick={handleOnSelectVehicle}
                  key={vehicle.id} {...vehicle}/>
            ))}
         </Stack>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         height: "100%",
      }
   },

   box: {
      spacing: 1,
      sx: {
         height: "100%",
         overflow: "auto",
         paddingBottom: 50
      }
   },

   title: {
      variant: "secondary" as const
   }
}

export default VehicleSelector