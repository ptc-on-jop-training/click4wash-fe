import DashboardLayout from "./_layout/_layout.tsx"
import {TabNav, TabRouteType} from "../../../../components"
import  {useMemo} from "react"
import {NotificationsSharp, RequestPageSharp,Language} from "@mui/icons-material"
import UsersTable from "./users-table.tsx"
import {Box, Typography} from "@mui/material"
import AccountTable from "./list-account/account-table.tsx";

function AdminDashboardPage() {
   const  data = [
      {
         id: "1",
         fullName: "John Doe",
         phoneNumber: "1234567890",
         email: "john.doe@example.com",
         role: "driver",
         isActive: true
      },
      {
         id: "2",
         fullName: "Jane Smith",
         phoneNumber: "9876543210",
         email: "jane.smith@example.com",
         role: "team-member",
         isActive: true
      },
      {
         id: "3",
         fullName: "Michael Johnson",
         phoneNumber: "5555555555",
         email: "michael.johnson@example.com",
         role: "team-member",
         isActive: false
      },
      {
         id: "4",
         fullName: "Emily Davis",
         phoneNumber: "7777777777",
         email: "emily.davis@example.com",
         role: "driver",
         isActive: true
      },
      {
         id: "5",
         fullName: "David Wilson",
         phoneNumber: "9999999999",
         email: "david.wilson@example.com",
         role: "driver",
         isActive: true
      }
   ]
   const routes = useMemo<TabRouteType[]>(() => {
      return [
         {
            label: <Box {...styles.tab}>
               <NotificationsSharp fontSize={"small"}/>
               <Typography>(10)notifications</Typography>
            </Box>,
            element:<UsersTable/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>user management</Typography>
            </Box>,
            element:  <AccountTable accountList={data}/>
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