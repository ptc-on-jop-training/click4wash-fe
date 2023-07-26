// import {useAuth0} from "@auth0/auth0-react"
// import {useEffect, useState} from "react"
import {Outlet} from "react-router-dom"
// import {PageLoading} from "../../components"
// import {Role} from "../../services/auth0"

function ProtectedLayout()
{
   // const {isLoading, isAuthenticated, getIdTokenClaims} = useAuth0()
   // const nav = useNavigate()
   // const [renderNode, setRenderNode] = useState(<PageLoading/>)
   //
   // useEffect(() =>
   // {
   //    if (!isLoading) {
   //       void handleAuthDecision()
   //    }
   // }, [isAuthenticated, isLoading])
   //
   // const handleAuthDecision = async () =>
   // {
   //    if (isAuthenticated)
   //    {
   //       const claims = await getIdTokenClaims()
   //       const role = claims?.role
   //       setRenderNode(<Outlet/>)
   //
   //       switch (role)
   //       {
   //       case Role.driver:
   //          // eslint-disable-next-line no-case-declarations
   //          const isJustSignUp = claims?.isJustSignUp
   //          if (isJustSignUp === true) {
   //             nav("init-first-vehicle-profile", {replace: true})
   //          } else {
   //             nav("", {replace: true})
   //          }
   //          break
   //       case Role.admin:
   //          nav("admin", {replace: true})
   //          break
   //       case Role.teamMember:
   //          nav("team-member", {replace: true})
   //          break
   //       }
   //    }
   //    else
   //    {
   //       nav("/welcome", {replace: true})
   //    }
   // }

   return <Outlet/>
}

export default ProtectedLayout