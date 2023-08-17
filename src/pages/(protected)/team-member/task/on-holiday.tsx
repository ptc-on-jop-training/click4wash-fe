import { ImageListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import holidayImg from "../../../../assets/images/holiday.png"
const OnHoliday = () => {
   return (
      <Box {...cfn.box}>
         <ImageListItem>
            <img src={holidayImg} loading="lazy" />
         </ImageListItem>
         <Typography>You are on vacation, enjoy your time!</Typography>
      </Box>
   )
}

export default OnHoliday

const cfn = {
   box: {
      sx: {
         display: "flex",
         width: "100%",
         margin: "auto",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         paddingTop: 3,
      },
   },
}
