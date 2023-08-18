import {useAuth0} from "@auth0/auth0-react"
import {ReactNode, useEffect, useState} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {WelcomePage} from "../pages"
import AdminRouter from "./admin-router.tsx"
import DriverRouter from "./driver-router.tsx"
import LoadingRouter from "./loading-router.tsx"
import TeamMemberRouter from "./team-member-router.tsx"

function RootRouter()
{
   const {isLoading, isAuthenticated, getIdTokenClaims} = useAuth0()
   const [renderRoutes, setRenderRoutes] = useState<ReactNode>(LoadingRouter)

   useEffect(() => {
      if (!isLoading) {
         if (isAuthenticated) {
            getIdTokenClaims()
               .then(claims => {
                  if (claims?.role === "driver" || claims?.role == null) {
                     setRenderRoutes(DriverRouter)
                  } else if (claims?.role === "team-member") {
                     setRenderRoutes(TeamMemberRouter)
                  } else if (claims?.role === "admin") {
                     setRenderRoutes(AdminRouter)
                  }
               })
         } else if (window.location.pathname !== "/welcome") {
            window.location.href = "/welcome"
         }
      }
   }, [isLoading, isAuthenticated, getIdTokenClaims])

   return (
      <BrowserRouter>
         <Routes>
            <Route path={"welcome"} element={<WelcomePage/>}/>
            {renderRoutes}
         </Routes>
      </BrowserRouter>
   )
}

export default RootRouter