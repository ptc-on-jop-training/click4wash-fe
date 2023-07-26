import {Box} from "@mui/material"

interface VehicleCardProps
{
   id: string
   numberPlate: string
}

function VehicleCard(props: VehicleCardProps)
{
   return (
      <Box sx={{
         width: "100%",
         height: "90px",
         borderRadius: "5px",
         border: "1px solid #9BABB8"
      }}>
         {props.numberPlate}
      </Box>
   )
}

export default VehicleCard