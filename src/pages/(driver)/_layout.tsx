import {Auth0Provider} from "@auth0/auth0-react"
import {Box} from "@mui/material"
import {Outlet} from "react-router-dom"
import Header from "./header.tsx"

function DriverLayout()
{
   return (
      <Auth0Provider {...cfn.authProvider}>
         <Header/>
         <Box {...cfn.outletContainer}><Outlet/></Box>
      </Auth0Provider>
   )
}

const cfn = {

   authProvider: {
      domain: "click4wash-dev.jp.auth0.com",
      clientId: "3efV1oq9w0pwK3WyeISPuId8eEfOXPzb",
      authorizationParams: {
         redirect_uri: window.location.origin
      }
   },

   outletContainer: {
      marginTop: 9
   }
}

export default DriverLayout