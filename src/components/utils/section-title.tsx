import {Box, SxProps, Typography} from "@mui/material"

interface SectionTitleProps
{
   title: string,
   sx?: SxProps
}

function SectionTitle(props: SectionTitleProps)
{
   return (
      <Box sx={props.sx}>
         <Typography {...cfn.title}>{props.title}</Typography>
      </Box>
   )
}

const cfn = {
   title: {
      fontWeight: "550"
   }
}

export default SectionTitle