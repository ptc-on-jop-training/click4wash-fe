import AdminLayout from "../_layout.tsx"
import ParkingSlotTable from "./parking-slot-table.tsx"

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