import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
   VehiclePage,
   DriverAppLayout,
   DriverHomePage,
   DriverNoticePage,
   ProtectedLayout,
   RootLayout,
   TeamMemberPage,
   WelcomePage,
   LocationPage,
   GeneralConditionPage,
   AccountPage,
   BookingPage,
   ParkingSlotPage,
   PrivacyPolicyPage,
   AdminLayout,
   InitVehicleProfilePage,
   TeamMemberAppLayout,
   BookingsPage,
   TasksPage,
} from "../pages"

function RootRouter() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={""} element={<RootLayout />}>
               <Route path={"welcome"} element={<WelcomePage />} />

               <Route path={""} element={<ProtectedLayout />}>
                  <Route path={""} element={<DriverAppLayout />}>
                     <Route path={""} element={<DriverHomePage />} />
                     <Route path={"car"} element={<VehiclePage />} />
                     <Route path={"notice"} element={<DriverNoticePage />} />
                  </Route>

                  <Route
                     path={"init-vehicle-profile"}
                     element={<InitVehicleProfilePage />}
                  />

                  <Route path={"admin"}>
                     <Route path={""} element={<AccountPage />} />
                     <Route path={"location"} element={<LocationPage />} />
                     <Route path={"booking"} element={<BookingPage />} />
                     <Route
                        path={"parking-slot"}
                        element={<ParkingSlotPage />}
                     />
                     <Route
                        path={"general-condition"}
                        element={<GeneralConditionPage />}
                     />
                     <Route
                        path={"privacy-policy"}
                        element={<PrivacyPolicyPage />}
                     />
                  </Route>

                  <Route path={"team-member"} element={<TeamMemberAppLayout />}>
                     <Route path={""} element={<TeamMemberPage />} />
                     <Route path={"booking"} element={<BookingsPage />} />
                     <Route path={"Task"} element={<TasksPage />} />
                     <Route path={"notice"} element={<TeamMemberPage />} />
                  </Route>
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default RootRouter
