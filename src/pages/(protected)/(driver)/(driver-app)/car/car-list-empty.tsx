import {Box, Button, Typography} from "@mui/material"
import CarImage from "../../../../../assets/images/sammy-line-white-car.png"

function CarListEmpty()
{
   return (
      <Box {...cfn.container}>
         <img src={CarImage} alt={"yeah"}/>
         <Typography {...cfn.message}>You are currently have no car profile</Typography>
         <Button {...cfn.addNewCarBtn}>add new?</Button>
      </Box>
   )
}

const cfn = {
   container: {
      mt: 3,
      sx: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
      }
   },

   message: {
      color: "gray",
      fontWeight: "bold" as const,
      sx: {
         margin: "20px 0"
      }
   },

   addNewCarBtn: {
      variant: "contained" as const,
      size: "small" as const
   }
}

export default CarListEmpty