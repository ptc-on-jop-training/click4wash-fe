import {TableToolBar} from "../../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"

function PackingSlotToolbar(){
   return(
      <TableToolBar leftTool={
         <>
            <Button
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >new Packing Slot</Button>
         </>
      }/>
   )
}
export default PackingSlotToolbar