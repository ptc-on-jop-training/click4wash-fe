import {Box, Stack} from "@mui/material"
import {useState} from "react"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {SectionTitle, VehicleCard} from "../../../../components"

function VehicleSelector()
{
   const vehicleList = useSelector((state: RootStateType) => state.vehicle.vehicleList)
   const [selectedVehicle, setSelectedVehicle] = useState("")

   const handleOnSelectVehicle = (id: string) => {
      setSelectedVehicle(id)
   }

   return (
      <Box {...cfn.container}>
         <SectionTitle title={"Select a vehicle"} {...cfn.title}/>
         <Stack {...cfn.box}>
            {vehicleList?.map((vehicle) => (
               <VehicleCard
                  variant={selectedVehicle === vehicle.id ? "highlight" : "primary"}
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