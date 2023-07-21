import {BrowserRouter, Route, Routes} from "react-router-dom"
import {CarPage} from "../pages"
import {DriverAppLayout} from "../pages"
import {DriverHomePage} from "../pages"
import {ProtectedLayout} from "../pages"
import {RootLayout} from "../pages"
import {TeamMemberPage} from "../pages"
import {WelcomePage} from "../pages"
import {AddressPage} from "../pages"
import {GeneralConditionPage} from "../pages"
import {AccountPage} from "../pages"
import {BookingPage} from "../pages"
import {NotificationPage} from "../pages"
import {PackingSlotPage} from "../pages"
import {PrivacyPolicyPage} from "../pages"
import {Layout} from "../pages"

function RootRouter() {
   return (
      <BrowserRouter>
         <Routes>

            <Route path={""} element={<RootLayout/>}>

               <Route path={"welcome"} element={<WelcomePage/>}/>

               <Route path={""} element={<ProtectedLayout/>}>
                  <Route path={""} element={<DriverAppLayout/>}>
                     <Route path={""} element={<DriverHomePage/>}/>
                     <Route path={"car"} element={<CarPage/>}/>
                  </Route>

                  <Route path={"admin"} element={<Layout/>}>
                     <Route path={"users"} element={<AccountPage/>}/>
                     <Route path={"notification"} element={<NotificationPage/>}/>
                     <Route path={"address"} element={<AddressPage/>}/>
                     <Route path={"bookings"} element={<BookingPage/>}/>
                     <Route path={"packing-slot"} element={<PackingSlotPage/>}/>
                     <Route path={"general-condition"} element={<GeneralConditionPage/>}/>
                     <Route path={"privacy-policy"} element={<PrivacyPolicyPage/>}/>
                  </Route>

                  <Route path={"team-member"} element={<TeamMemberPage/>}/>

               </Route>

            </Route>

         </Routes>
      </BrowserRouter>
   )
}

export default RootRouter