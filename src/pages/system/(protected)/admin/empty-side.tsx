import {Box, Typography} from "@mui/material"

function EmptySide() {
   return (
      <Box {...cfn.wrapper}>
         <Typography {...cfn.emptyHeading}>Nothing To Show</Typography>
         <Typography>Select something to see the detail</Typography>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         height: "100%",
      }
   },
   emptyHeading: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#888888",
   },
}

export default EmptySide