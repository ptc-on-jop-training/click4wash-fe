import {Box, Button, Typography} from "@mui/material"
import CarImage from "../../../../../assets/images/sammy-line-white-car.png"

interface CarListEmptyProps
{
   onClickAddNewBtn: () => void
}

function VehicleListEmpty(props: CarListEmptyProps)
{
   return (
      <Box {...cfn.container}>
         <img src={CarImage} alt={"yeah"}/>
         <Typography {...cfn.message}>You are currently have no vehicle profile</Typography>
         <Button {...cfn.addNewCarBtn} onClick={props.onClickAddNewBtn}>add new?</Button>
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

export default VehicleListEmpty