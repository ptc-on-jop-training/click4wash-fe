import {Box} from "@mui/material"
import PackingSlotTable from "./packing-slot-table.tsx";
function PackingSlotPage() {
   return (
      <Box>
         <PackingSlotTable {...cfn.accountTable}/>
      </Box>
   )
}

const cfn = {
   accountTable:{
      sx:{
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
      }
   }
}
export default PackingSlotPage