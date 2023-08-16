import {Box} from "@mui/material"
import {merge} from "lodash"

interface VehicleCardProps
{
   id: string
   numberPlate: string
   variant?: "primary" | "highlight"
   onClick?: (id: string) => void
}

function VehicleCard(props: VehicleCardProps)
{
   const variant = variants[props.variant ?? "primary"]

   return (
      <Box {...merge(cfn.container, variant.container)} onClick={() => props.onClick && props.onClick(props.id)}>
         {props.numberPlate}
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         width: "100%",
         minHeight: "90px",
         borderRadius: "5px",
      }
   }
}

const variants = {
   primary: {
      container: {
         sx: {
            border: "1px solid",
            borderColor: "#9BABB8"
         }
      }
   },
   highlight: {
      container: {
         sx: {
            border: "2px solid",
            borderColor: "primary.main"
         }
      }
   }
}

export default VehicleCard