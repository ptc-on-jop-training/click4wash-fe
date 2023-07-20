import {Box} from "@mui/material"
import {ReactNode} from "react"

type TabLableProps = {
   label: string
   icon?: ReactNode
}

function TabLabel(props: TabLableProps) {
   return (
      <Box {...cfn.wrapper}>
         {props.icon}
         <p style={cfn.label}>{props.label}</p>
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
   },
   label: {
      fontSize: '15px',
      fontWeight: 'bold'
   }
}

export default TabLabel