import {Box, SxProps, Typography} from "@mui/material"
import {ReactNode} from "react"
import {merge} from "lodash"

interface SectionTitleProps
{
   title: string,
   rightSlot?: ReactNode
   sx?: SxProps
}

function SectionTitle(props: SectionTitleProps)
{
   return (
      <Box {...merge(cfn.container, {sx: props.sx})}>
         <Typography {...cfn.title}>{props.title}</Typography>
         <div>{props.rightSlot}</div>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center"
      }
   },
   title: {
      fontWeight: "550"
   }
}

export default SectionTitle