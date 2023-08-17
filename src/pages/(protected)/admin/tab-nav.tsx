import {SyntheticEvent, useState} from "react"
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
import {useTranslation} from "react-i18next"


import {TabLabel} from "../../../components"

const TabNav = () => {   
   const [t] = useTranslation('trans')
   
   const nav = useNavigate()
   const location = useLocation()
   
   const navData = [

      {
         label: <TabLabel label={t('admin.Layout.TabNab.userManagement')} icon={<People fontSize="medium"/>}/>,
         value: "/admin",
      },
      {
         label: <TabLabel label={t('admin.Layout.TabNab.listBooking')} icon={<PlaylistAddCheckCircle fontSize="medium"/>}/>,
         value: "/admin/booking",
      },
      {
         label: <TabLabel label={t('admin.Layout.TabNab.locations')} icon={<LocationOn fontSize="medium"/>}/>,
         value: "/admin/location",
      },
      {
         label: <TabLabel label={t('admin.Layout.TabNab.parkingSlot')} icon={<Garage fontSize="medium"/>}/>,
         value: "/admin/parking-slot",
      },
      {
         label: <TabLabel label={t('admin.Layout.TabNab.generalCondition')} icon={<Article fontSize="medium"/>}/>,
         value: "/admin/general-condition",
      },
      {
         label: <TabLabel label={t('admin.Layout.TabNab.privacyPolicy')} icon={<PrivacyTip fontSize="medium"/>}/>,
         value: "/admin/privacy-policy",
      },
   ]

   const tabIndex = navData.findIndex((route) => route.value === location.pathname)
   const [currentTabIndex, setCurrentTabIndex] = useState(tabIndex)

   const handleTabChange = (_: SyntheticEvent, newValue: any) => {
      nav(navData[newValue].value)
      setCurrentTabIndex(newValue)
   }

   return (
      <Box sx={cfn.tabWrapper}>
         <Tabs scrollButtons="auto" value={currentTabIndex} onChange={handleTabChange}>
            {navData.map((route, index) => (
               <Tab key={index} label={route.label} />
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