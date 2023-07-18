import {TableToolBar} from "../../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"

function PackingSlotToolbar() {
   return (
      <TableToolBar leftTool={
         <>
            <Button
               {...cfn.button}
               startIcon={<AddBox sx={{color: "white"}}/>}
            >new Packing Slot</Button>
         </>
      }/>
   )
}

const cfn = {
   button: {
      size: "small" as const,
      variant: "contained" as const,
   }
}

export default PackingSlotToolbar