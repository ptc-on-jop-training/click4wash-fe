import {Auth0Provider} from "@auth0/auth0-react"
import {CssBaseline} from "@mui/material"
import {Outlet} from "react-router-dom"
import {Auth0Config} from "../services/auth0"

function RootLayout()
{
   return (
      <Auth0Provider {...Auth0Config}>
         <CssBaseline>
            <Outlet/>
         </CssBaseline>
      </Auth0Provider>
   )
}

export default RootLayout