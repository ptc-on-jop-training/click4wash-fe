import {Box} from "@mui/material"
import AdminLayout from "../_layout.tsx"

function ParkingSlotPage() {
   return (
      <AdminLayout
         main={
            <ParkingSlotTable {...cfn.accountTable}/>
         }
      />
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