import {Box} from "@mui/material"
import ParkingSlotTable from "./parking-slot-table.tsx"
function ParkingSlotPage() {
   return (
      <Box>
         <ParkingSlotTable {...cfn.accountTable}/>
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
export default ParkingSlotPage