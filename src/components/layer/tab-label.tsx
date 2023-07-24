import {Box, Typography} from "@mui/material"
import {ReactNode} from "react"

type TabLableProps = {
   label: string
   icon?: ReactNode
}

function TabLabel(props: TabLableProps) {
   return (
      <Box {...cfn.wrapper}>
         {props.icon}
         <Typography>{props.label}</Typography>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "4px"
      }
   }
}

export default TabLabel