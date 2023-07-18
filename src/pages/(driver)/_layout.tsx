import {Auth0Provider} from "@auth0/auth0-react"
import {Container} from "@mui/material"
import {Outlet} from "react-router-dom"
import Header from "./header.tsx"

function DriverLayout()
{
   return (
      <Auth0Provider {...cfn.authProvider}>
         <Header/>
         <Container {...cfn.outletContainer}><Outlet/></Container>
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
      sx: {
         marginTop: 9
      }
   }
}

export default DriverLayout