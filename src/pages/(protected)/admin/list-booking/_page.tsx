import AdminLayout from "../_layout.tsx"
import BookingTable from "./booking-table.tsx"

function BookingPage() {
   return (
      <AdminLayout
         main={
            <BookingTable {...cfn.BookingTable}/>
         }
      />
   )
}
const cfn = {
   BookingTable: {
      sx:{
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
      }
   }
}


export default BookingPage