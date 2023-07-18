import {Box} from "@mui/material"
import {ReactNode} from "react"

interface SectionHeaderProps
{
   left: ReactNode,
   right?: ReactNode
}

function SectionHeader(props: SectionHeaderProps)
{
   return (
      <Box {...cfn.container}>
         <Box {...cfn.left}>{props.left}</Box>
         <Box {...cfn.right}>{props.right}</Box>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         width: "100%",
         display: "flex",
         justifyContent: "space-between",
         marginBottom: 1
      }
   },
   left: {

   },
   right: {

   }
}

export default SectionHeader