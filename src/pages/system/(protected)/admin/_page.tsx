import DashboardLayout from "./_layout.tsx"
import {TabNav, TabRouteType} from "../../../../components"
import {useMemo} from "react"
import {NotificationsSharp, RequestPageSharp, Language} from "@mui/icons-material"
import UsersTable from "./users-table.tsx"
import {Box, Typography} from "@mui/material"
import PackingSlotTable from "./packing-slot/packing-slot-table.tsx"
import AddressTable from "./address/address-table.tsx"
import BookingTable from "./list-booking/booking-table.tsx"
import AccountTable from "./list-account/account-table.tsx"
import {accountData} from "./list-account/data/account-data.tsx"

function AdminDashboardPage() {
   const data = [
      {
         id: "1",
         date: new Date(),
         chargeBattery: true,
         location: {
            address: "123 ABC Street",
            parkingSlot: "A1",
            timeslot: 1,
         },
         driver: {
            fullName: "John Doe",
            phoneNumber: "123456789",
            email: "johndoe@example.com",
            vehicleInfo: "Car Model XYZ",
         },
         teamMember: {
            fullName: "Jane Smith",
            phoneNumber: "987654321",
            email: "janesmith@example.com",
         },
         status: "requested",
         comment: "Great service!",
         rating: 5,
         feedback: "Very satisfied with the washing service.",
      },
      {
         id: "2",
         date: new Date(),
         chargeBattery: false,
         location: {
            address: "456 XYZ Street",
            parkingSlot: "B2",
            timeslot: 2,
         },
         driver: {
            fullName: "Alice Johnson",
            phoneNumber: "987654321",
            email: "alicejohnson@example.com",
            vehicleInfo: "Car Model ABC",
         },
         teamMember: {
            fullName: "Bob Williams",
            phoneNumber: "123456789",
            email: "bobwilliams@example.com",
         },
         status: "done",
         comment: "Great service!",
         rating: 5,
         feedback: "Very satisfied with the washing service.",
      },
   ]
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
            element: <AccountTable accountList={accountData}/>
         },
         {
            label: <Box {...styles.tab}>
               <RequestPageSharp fontSize={"small"}/>
               <Typography>List Booking</Typography>
            </Box>,
            element: <BookingTable bookingList={data}/>
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
            <TabNav routes={routes} rightSlot={<Language fontSize={"large"} color={"info"}/>}/>
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