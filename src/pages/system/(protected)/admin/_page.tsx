import DashboardLayout from "./_layout/_layout.tsx"
import {TabNav, TabRouteType} from "../../../../components"
import {useMemo} from "react"
import {NotificationsSharp, RequestPageSharp} from "@mui/icons-material"
import UsersTable from "./users-table.tsx"
import {Box, Typography} from "@mui/material"
import PackingSlotTable from "./packing-slot/packing-slot-table.tsx"
import AddressTable from "./address/address-table.tsx"
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
               <Typography>Address</Typography>
            </Box>,
            element: <AddressTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>Parking Slots</Typography>
            </Box>,
            element: <PackingSlotTable/>
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
         </Box>}
      />
   )
}

const styles = {
   mainLayout: {
      sx: {
         display: "flex",
         flexDirection: "column",
      }
   },
   tab: {
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "4px"
      }
   },
}

export default AdminDashboardPage