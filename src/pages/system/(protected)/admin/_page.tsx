import DashboardLayout from "./_layout.tsx"
import {TabNav, TabRouteType} from "../../../../components"
import {useMemo} from "react"
import {
   People,
   NotificationsSharp,
   Language,
   PlaylistAddCheckCircle,
   Garage,
   LocationOn,
   Article,
   PrivacyTip
} from "@mui/icons-material"

import UsersTable from "./users-table.tsx"
import {Box} from "@mui/material"
import PackingSlotTable from "./packing-slot/packing-slot-table.tsx"
import AddressTable from "./address/address-table.tsx"
import BookingTable from "./list-booking/booking-table.tsx"
import AccountTable from "./list-account/account-table.tsx"
import {accountData} from "./list-account/data/account-data.tsx"
import {ListBookingData} from "./list-booking/data/list-booking.ts"
import {TabLabel} from "../../../../components"

function AdminDashboardPage() {

   const routes = useMemo<TabRouteType[]>(() => {
      return [
         {
            label: <TabLabel label={"notifications"} icon={<NotificationsSharp fontSize="medium"/>}/>,
            element: <UsersTable/>
         },
         {
            label: <TabLabel label={"user management"} icon={<People fontSize="medium"/>}/>,
            element: <AccountTable accountList={accountData}/>
         },
         {
            label: <TabLabel label={"List Booking"} icon={<PlaylistAddCheckCircle fontSize="medium"/>}/>,
            element: <BookingTable bookingList={ListBookingData}/>
         },
         {
            label: <TabLabel label={"Address"} icon={<LocationOn fontSize="medium"/>}/>,
            element: <AddressTable/>
         },
         {
            label: <TabLabel label={"Parking Slots"} icon={<Garage fontSize="medium"/>}/>,
            element: <PackingSlotTable/>
         },
         {
            label: <TabLabel label={"general condition"} icon={<Article fontSize="medium"/>}/>,
            element: <UsersTable/>
         },
         {
            label: <TabLabel label={"Privacy Policy"} icon={<PrivacyTip fontSize="medium"/>}/>,
            element: <UsersTable/>
         },
      ]
   }, [])

   return (
      <DashboardLayout
         main={<Box {...cfn.mainLayout}>
            <TabNav routes={routes} rightSlot={<Language fontSize={"large"} color={"info"}/>}/>
         </Box>}
      />
   )
}

const cfn = {
   mainLayout: {
      sx: {
         display: "flex",
         flexDirection: "column",
      }
   }
}

export default AdminDashboardPage