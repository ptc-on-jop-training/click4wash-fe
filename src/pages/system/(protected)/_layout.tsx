import {Outlet, useNavigate} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
import {ReactNode, useEffect, useState} from "react"
import {PageLoading} from "../../../components"
import role from "../../../constants/role.ts"
import {RouteConst} from "../../../router"

function ProtectedLayout()
{
   const nav = useNavigate()
   const {isLoading, isAuthenticated, loginWithRedirect, getIdTokenClaims} = useAuth0()
   const [renderNode, setRenderNode] = useState<ReactNode>(<PageLoading/>)

   useEffect(() => {
      handleRedirect()
   }, [isLoading, isAuthenticated, nav, loginWithRedirect])

   const handleRedirect = () => {
      if (!isLoading) {
         if (isAuthenticated) {
            handleAuthenticRedirect()
         } else {
            void loginWithRedirect()
         }
      }
   }

   const handleAuthenticRedirect = () => {
      void getIdTokenClaims()
         .then(claims => {
            setRenderNode(<Outlet/>)
            if (claims?.role === role.admin) {
               nav(RouteConst.admin, {replace: true})
            } else if (claims?.role === role.teamMember) {
               nav(RouteConst.teamMember, {replace: true})
            } else {
               void loginWithRedirect()
            }
         })
   }

   return renderNode
}

export default ProtectedLayout