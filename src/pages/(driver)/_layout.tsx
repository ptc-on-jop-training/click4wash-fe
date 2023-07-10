import {Auth0Provider} from "@auth0/auth0-react"
import {Outlet} from "react-router-dom"

function DriverLayout()
{
   return (
      <Auth0Provider {...cfn.authProvider}>
         <Outlet/>
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
   }
}

export default DriverLayout