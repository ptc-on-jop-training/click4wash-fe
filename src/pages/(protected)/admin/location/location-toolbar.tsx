import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"

function LocationToolBar() {
   return (
      <TableToolbar leftTool={
         <>
            <Button
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >
               new Location
            </Button>
         </>
      }/>
   )
}


export default LocationToolBar