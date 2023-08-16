import {Box, SxProps, Typography} from "@mui/material"
import {ReactNode} from "react"
import {merge} from "lodash"

interface SectionTitleProps
{
   title: string,
   rightSlot?: ReactNode
   sx?: SxProps
   variant?: "primary" | "secondary"
}

function SectionTitle(props: SectionTitleProps)
{
   const variant = cfn[props.variant ?? "primary"]

   return (
      <Box {...merge(cfn.container, {sx: props.sx})}>
         <Typography {...merge(cfn.title, variant.title)}>
            {props.title}
         </Typography>
         <div>{props.rightSlot}</div>
      </Box>
   )
}

const cfn = {
   container: {
      sx: {
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         marginBottom: 1
      }
   },
   title: {
      fontWeight: "550",
      width: "100%"
   },

   primary: {
      title: {
         textAlign: "start" as const
      }
   },

   secondary: {
      title: {
         textAlign: "center" as const
      }
   }
}

export default SectionTitle