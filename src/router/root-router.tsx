import {BrowserRouter, Route, Routes} from "react-router-dom"
import {
    VehiclePage,
    DriverAppLayout,
    DriverHomePage,
    DriverNoticePage,
    ProtectedLayout,
    RootLayout,
    TeamMemberPage,
    WelcomePage,
    AddressPage,
    GeneralConditionPage,
    AccountPage,
    BookingPage,
    NotificationPage,
    PackingSlotPage,
    PrivacyPolicyPage,
    AdminLayout,
    InitVehicleProfilePage
} from "../pages"

function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path={""} element={<RootLayout/>}>

                    <Route path={"welcome"} element={<WelcomePage/>}/>

                    <Route path={""} element={<ProtectedLayout/>}>
                        <Route path={""} element={<DriverAppLayout/>}>
                            <Route path={""} element={<DriverHomePage/>}/>
                            <Route path={"car"} element={<VehiclePage/>}/>
                            <Route path={"notice"} element={<DriverNoticePage/>}/>
                        </Route>

                        <Route path={"init-vehicle-profile"} element={<InitVehicleProfilePage/>}/>

                        <Route path={"admin"} element={<AdminLayout/>}>
                            <Route path={"user"} element={<AccountPage/>}/>
                            <Route path={"notification"} element={<NotificationPage/>}/>
                            <Route path={"location"} element={<AddressPage/>}/>
                            <Route path={"booking"} element={<BookingPage/>}/>
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