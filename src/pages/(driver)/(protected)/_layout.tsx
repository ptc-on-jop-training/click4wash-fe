import {Outlet, useNavigate} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
import {ReactNode, useEffect, useState} from "react"
import {PageLoading} from "../../../components"
import {Route} from "../../../constants"

function ProtectedLayout()
{
   const nav = useNavigate()
   const {isLoading, isAuthenticated} = useAuth0()
   const [renderNode, setRenderNode] = useState<ReactNode>(<PageLoading/>)

   useEffect(() => {
      if (!isLoading) {
         if (isAuthenticated) {
            setRenderNode(<Outlet/>)
         } else {
            nav(Route.introduction, {replace: true})
         }
      }
   }, [isLoading, isAuthenticated, nav])

   return renderNode
}

export default ProtectedLayout
