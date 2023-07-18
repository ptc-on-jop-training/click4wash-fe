import {Auth0Provider} from "@auth0/auth0-react"
import {CssBaseline} from "@mui/material"
import {Outlet} from "react-router-dom"

function RootLayout()
{
   return (
      <Auth0Provider {...cfn.auth0Provider}>
         <CssBaseline>
            <Outlet/>
         </CssBaseline>
      </Auth0Provider>
   )
}

const cfn = {
   auth0Provider: {
      domain: "click4wash-development.jp.auth0.com",
      clientId: "vNwnf0MS6tu8Cut14Km0CTyyQEQiFDWe",
      authorizationParams: {
         redirect_uri: window.location.origin
      }
   }
}

export default RootLayout