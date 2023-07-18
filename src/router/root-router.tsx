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
import {Route} from "../constants"

// well I think the classic way is better
const RootRouter = createBrowserRouter([
   {
      path: Route.root,
      element: <RootLayout/>,
      children: [
         {
            path: "",
            element: <DriverLayout/>,
            children: [
               {
                  path: Route.introduction,
                  element: <IntroductionPage/>
               },
               {
                  path: "",
                  element: <ProtectedDriverLayout/>,
                  children: [
                     {
                        path: Route.driver,
                        element: <DashboardPage/>
                     }
                  ]
               }
            ]
         },

         {
            path: Route.system,
            element: <SystemLayout/>,
            children: [
               {
                  path: "",
                  element: <ProtectedSystemLayout/>,
                  children: [
                     {
                        path: Route.admin,
                        element: <AdminPage/>,
                     },
                     {
                        path: Route.teamMember,
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