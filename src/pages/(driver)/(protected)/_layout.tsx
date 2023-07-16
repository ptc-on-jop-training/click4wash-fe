import {Outlet, useNavigate} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
import {ReactNode, useEffect, useState} from "react"
import {PageLoading} from "../../../components"
import {Route} from "../../../constants"

function ProtectedLayout()
{
   const nav = useNavigate()
   const {isLoading, isAuthenticated, getIdTokenClaims} = useAuth0()
   const [renderNode, setRenderNode] = useState<ReactNode>(<PageLoading/>)

   useEffect(() => {
      if (!isLoading) {
         handleAuthDecision()
      }
   }, [isLoading, isAuthenticated, nav, getIdTokenClaims])

   function handleAuthDecision() {
      if (isAuthenticated) {
         void getIdTokenClaims()
            .then(claims => {
               setRenderNode(<Outlet/>)
               handleAuthRedirection(claims?.login_count as number)
            })
            .catch(() => {
               nav(Route.introduction, {replace: true})
            })
      } else {
         nav(Route.introduction, {replace: true})
      }
   }

   function handleAuthRedirection(loginCount: number) {
      if (loginCount === 1) {
         handleRegisterUser()
      } else if (loginCount >= 1) {
         nav(Route.driver, {replace: true})
      }
   }

   function handleRegisterUser() {
      nav(Route.initProfile, {replace: true})
   }

   return renderNode
}

export default ProtectedLayout
