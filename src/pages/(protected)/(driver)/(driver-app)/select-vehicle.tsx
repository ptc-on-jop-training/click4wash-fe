import {Box, Stack} from "@mui/material"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {SectionTitle, VehicleCard} from "../../../../components"

function SelectVehicle()
{
   const vehicleList = useSelector((state: RootStateType) => state.vehicle.vehicleList)

   return (
      <Box {...cfn.container}>
         <SectionTitle title={"Select a vehicle"} {...cfn.title}/>
         <Stack {...cfn.box}>
            {vehicleList?.map((vehicle) => (
               <VehicleCard key={vehicle.id} {...vehicle}/>
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

export default SelectVehicle