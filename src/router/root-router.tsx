import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AdminPage, DriverPage, ProtectedLayout, RootLayout, TeamMemberPage, WelcomePage} from "../pages"

function RootRouter()
{
   return (
      <BrowserRouter>
         <Routes>

            <Route path={""} element={<RootLayout/>}>

               <Route path={"welcome"} element={<WelcomePage/>}/>

               <Route path={""} element={<ProtectedLayout/>}>

                  <Route path={""} element={<DriverPage/>}/>

                  <Route path={"admin"} element={<AdminPage/>}/>

                  <Route path={"team-member"} element={<TeamMemberPage/>}/>

               </Route>

            </Route>

         </Routes>
      </BrowserRouter>
   )
}

export default RootRouter