import BookingTable from "./booking-table.tsx"

function BookingPage()
{
   return (
      <BookingTable  {...cfn.BookingTable}/>
   )
}

const cfn = {
   BookingTable:{
      sx:{
         height: "100%",
         maxHeight: "calc(100vh - 129px)",
      }
   }
}

export default BookingPage