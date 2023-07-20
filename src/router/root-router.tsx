import {BrowserRouter, Route, Routes} from "react-router-dom"
import {
   CarPage,
   DriverAppLayout, DriverHomePage,
   ProtectedLayout,
   RootLayout,
   TeamMemberPage,
   WelcomePage,
   AddressPage,
   GeneralConditionPage,
   ListAccountPage,
   ListBookingPage,
   NotificationPage,
   PackingSlotPage,
   PrivacyPolicyPage
} from "../pages"
import Layout from "../pages/(protected)/admin/layout.tsx";

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
                     <Route path={"user-management"} element={<ListAccountPage/>}/>
                     <Route path={"notification"} element={<NotificationPage/>}/>
                     <Route path={"address"} element={<AddressPage/>}/>
                     <Route path={"list-booking"} element={<ListBookingPage/>}/>
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