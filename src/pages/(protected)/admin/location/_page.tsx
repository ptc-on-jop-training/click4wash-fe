import LocationTable from "./location-table.tsx"

function LocationPage() {
   return (
      <LocationTable {...cfn.locationTable}/>
   )
}

const cfn = {
   locationTable: {
      sx: {
         height: "100%",
         maxHeight: "calc(100vh - 129px)",
      }
   }
}

export default LocationPage