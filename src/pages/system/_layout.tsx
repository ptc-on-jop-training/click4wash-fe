import {Auth0Provider} from "@auth0/auth0-react"
import {Outlet} from "react-router-dom"

function SystemLayout()
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
      clientId: "uTMBz4K1LaQnYo5M6VQrTmWde4z2kW3p",
      authorizationParams: {
         redirect_uri: `${window.location.origin}/system`
      }
   }
}


export default SystemLayout