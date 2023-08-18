import {Route} from "react-router-dom"
import {
   DriverAppLayout,
   DriverHomePage,
   DriverNoticePage,
   InitVehicleProfilePage,
   ProtectedLayout,
   VehiclePage
} from "../pages"

export default [
   <Route key={"driver-router"} path={""} element={<ProtectedLayout/>}>
      <Route path={""} element={<DriverAppLayout/>}>
         <Route path={""} element={<DriverHomePage/>}/>
         <Route path={"car"} element={<VehiclePage/>}/>
         <Route path={"notice"} element={<DriverNoticePage/>}/>
      </Route>
      <Route path={"init-vehicle-profile"} element={<InitVehicleProfilePage/>}/>
   </Route>
]