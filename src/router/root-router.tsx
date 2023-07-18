import {createBrowserRouter} from "react-router-dom"
import {
   AdminPage,
   DashboardPage,
   DriverLayout,
   IntroductionPage,
   ProtectedDriverLayout,
   ProtectedSystemLayout,
   RootLayout,
   SystemLayout,
   TeamMemberPage
} from "../pages"
import RouteConst from "./route-const.ts"


// well I think the classic way is better
const RootRouter = createBrowserRouter([
   {
      path: RouteConst.root,
      element: <RootLayout/>,
      children: [
         {
            path: "",
            element: <DriverLayout/>,
            children: [
               {
                  path: RouteConst.introduction,
                  element: <IntroductionPage/>
               },
               {
                  path: "",
                  element: <ProtectedDriverLayout/>,
                  children: [
                     {
                        path: RouteConst.driver,
                        element: <DashboardPage/>
                     }
                  ]
               }
            ]
         },

         {
            path: RouteConst.system,
            element: <SystemLayout/>,
            children: [
               {
                  path: "",
                  element: <ProtectedSystemLayout/>,
                  children: [
                     {
                        path: RouteConst.admin,
                        element: <AdminPage/>,
                     },
                     {
                        path: RouteConst.teamMember,
                        element: <TeamMemberPage/>
                     }
                  ]
               }
            ]
         }
      ]
   }
])

export default RootRouter