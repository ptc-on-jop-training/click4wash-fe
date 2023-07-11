import {createBrowserRouter} from "react-router-dom"
import {
   AdminPage,
   HomePage,
   DriverLayout,
   InitProfilePage,
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
                        path: Route.initProfile,
                        element: <InitProfilePage/>
                     },
                     {
                        path: Route.driver,
                        element: <HomePage/>
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
                        element: <AdminPage/>
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