import {Route} from "react-router-dom"
import {
   AccountPage,
   BookingPage,
   GeneralConditionPage,
   LocationPage,
   ParkingSlotPage,
   PrivacyPolicyPage
} from "../pages"

export default [
   <Route key={"admin-router"} path={""}>
      <Route path={""} element={<AccountPage/>}/>
      <Route path={"location"} element={<LocationPage/>}/>
      <Route path={"booking"} element={<BookingPage/>}/>
      <Route path={"parking-slot"} element={<ParkingSlotPage/>}/>
      <Route path={"general-condition"} element={<GeneralConditionPage/>}/>
      <Route path={"privacy-policy"} element={<PrivacyPolicyPage/>}/>
   </Route>
]