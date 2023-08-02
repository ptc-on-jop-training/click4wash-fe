import { SyntheticEvent, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {Box, Tab, Tabs} from "@mui/material"
import {
   People,
   PlaylistAddCheckCircle,
   Garage,
   Article,
   PrivacyTip,
   LocationOn,
} from '@mui/icons-material'

import {TabLabel} from "../../../components"


const TabNav = () => {

   const location = useLocation()
   const nav = useNavigate()
   const [currentTabIndex, setCurrentTabIndex] = useState(0)

   useEffect(() => {
      const tabIndex = navData.findIndex((route) => route.value === location.pathname)
      setCurrentTabIndex(tabIndex !== -1 ? tabIndex : 0)
   }, [location.pathname])

   const handleSwitchRoute = (_: SyntheticEvent, newValue: any) => {
      setCurrentTabIndex(newValue)
      nav(navData[newValue].value)
   }

   const navData = [
      {
         label: <TabLabel label={"user management"} icon={<People fontSize="medium"/>}/>,
         value: "",
      },
      {
         label: <TabLabel label={"List Booking"} icon={<PlaylistAddCheckCircle fontSize="medium"/>}/>,
         value: "/admin/booking",
      },
      {
         label: <TabLabel label={"Locations"} icon={<LocationOn fontSize="medium"/>}/>,
         value: "/admin/location",
      },
      {
         label: <TabLabel label={"Parking Slot"} icon={<Garage fontSize="medium"/>}/>,
         value: "/admin/parking-slot",
      },
      {
         label: <TabLabel label={"general condition"} icon={<Article fontSize="medium"/>}/>,
         value: "/admin/general-condition",
      },
      {
         label: <TabLabel label={"Privacy Policy"} icon={<PrivacyTip fontSize="medium"/>}/>,
         value: "/admin/privacy-policy",
      },
   ]

   return (
      <Box sx={cfn.tabWrapper}>
         <Tabs scrollButtons="auto" value={currentTabIndex} onChange={handleSwitchRoute}>
            {navData.map((route, index) => (
               <Tab key={index} label={route.label}/>
            ))}
         </Tabs>
      </Box>
   )
}

const cfn = {
   tabWrapper: {
      borderBottom: 1,
      borderColor: 'divider',
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
   },
}

export default TabNav