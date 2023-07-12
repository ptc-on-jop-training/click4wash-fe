import DashboardLayout from "./_layout/_layout.tsx"
import {TabNav, TabRouteType} from "../../../../components"
import {useMemo} from "react"
import {NotificationsSharp, RequestPageSharp,Language} from "@mui/icons-material"
import UsersTable from "./users-table.tsx"
import {Box, Typography} from "@mui/material"

function AdminDashboardPage() {
   const routes = useMemo<TabRouteType[]>(() => {
      return [
         {
            label: <Box {...styles.tab}>
               <NotificationsSharp fontSize={"small"}/>
               <Typography>(10)notifications</Typography>
            </Box>,
            element: <UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>user management</Typography>
            </Box>,
            element: <UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>List Booking</Typography>
            </Box>,
            element: <UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>Parking Slots</Typography>
            </Box>,
            element: <UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>general condition</Typography>
            </Box>,
            element: <UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>Privacy Policy</Typography>
            </Box>,
            element: <UsersTable/>
         },
      ]
   }, [])

   return (
      <DashboardLayout
         main={<Box {...styles.mainLayout}>
            <TabNav routes={routes}/>
            <Box {...styles.tabLanguage}>
               <Language fontSize={"large"} color={"info"}/>
            </Box>
         </Box>}
      />
   )
}

const styles = {
   mainLayout: {
      sx: {
         display: "flex",
         flexDirection: "column",
         position: "relative"
      }
   },
   tab: {
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "4px"
      }
   },
   tabLanguage: {
      sx: {
         display: "flex",
         alignItems: "center",
         position:"absolute",
         right:30,
         top:5
      }
   }
}

export default AdminDashboardPage