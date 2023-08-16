import {Box, Typography} from "@mui/material"
import {merge} from "lodash"
import {VehicleType} from "../../services/api"
import {VehicleIcon} from "../index.ts"

interface VehicleCardProps
{
   id: string
   numberPlate: string
   type: VehicleType
   color: string
   model: string
   variant?: "primary" | "highlight"
   onClick?: (id: string) => void
}

function VehicleCard(props: VehicleCardProps)
{
   const variant = variants[props.variant ?? "primary"]

   return (
      <Box {...merge(cfn.container, variant.container)} onClick={() => props.onClick && props.onClick(props.id)}>
         <Box sx={{margin: "0 40px"}}>
            <VehicleIcon type={props.type}/>
         </Box>
         <Box>
            <Typography {...cfn.lineInfo}>&#x2022; plate: {props.numberPlate}</Typography>
            <Typography {...cfn.lineInfo}>&#x2022; color: {props.color}</Typography>
            <Typography {...cfn.lineInfo}>&#x2022; model: {props.model}</Typography>
         </Box>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         width: "100%",
         minHeight: "90px",
         borderRadius: "5px",
         display: "flex",
         alignItems: "center"
      }
   },
   lineInfo: {
      sx: {
         fontSize: "15px",
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