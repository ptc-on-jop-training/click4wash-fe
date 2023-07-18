import {Box, BoxProps, Typography} from "@mui/material"

interface LogoProps
{
   containerProps?: BoxProps
}

function Logo(props: LogoProps)
{
   return (
      <Box {...props.containerProps}>
         <Typography {...cfn.typo}>Click4Wash</Typography>
      </Box>
   )
}

const cfn = {
   typo: {
      variant: "h6" as const,
      fontWeight: "bold" as const
   }
}

export default Logo