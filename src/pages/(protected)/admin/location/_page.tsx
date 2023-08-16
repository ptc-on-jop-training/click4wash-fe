import LocationTable from "./location-table.tsx"
import AdminLayout from "../_layout.tsx"
import LocationDetail from "./location-detail.tsx"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"

function LocationPage() {

   const LocationSelected = useSelector((state: RootStateType) => state.location.locationSelected)

   return (
      <AdminLayout
         leftSide={LocationSelected !== null ? <LocationDetail LocationSelected={LocationSelected}/> : null}
         main={<LocationTable {...cfn.locationTable} />}
      />
   )
}

const cfn = {
   locationTable: {
      sx:{
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
      }
   }
}

export default LocationPage