import {
   BottomNavigation,
   BottomNavigationAction,
   Paper,
   SxProps,
} from "@mui/material"
import { Notifications, AddBox, Home, ListAlt } from "@mui/icons-material"
import { merge } from "lodash"
import { SyntheticEvent, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface BottomNavProps {
   sx?: SxProps
}

const navData = [
   {
      label: "Home",
      value: "",
      icon: <Home />,
   },
   {
      label: "Booking",
      value: "booking",
      icon: <AddBox />,
   },
   {
      label: "Task",
      value: "task",
      icon: <ListAlt />,
   },
   {
      label: "Notice",
      value: "notice",
      icon: <Notifications />,
   },
]

function BottomNav(props: BottomNavProps) {
   const location = useLocation()
   const nav = useNavigate()
   const [value, setValue] = useState(
      location.pathname.split("/")[
         `${location.pathname} `.split("/").length - 2
      ]
   )

   const handleSwitchRoute = (_: SyntheticEvent, newValue: string) => {
      setValue(newValue)
      nav(newValue)
   }

   return (
      <Paper {...merge(cfn.container, { sx: props.sx })}>
         <BottomNavigation
            {...cfn.bottomNav}
            value={value}
            onChange={handleSwitchRoute}
         >
            {navData.map((item, index) => (
               <BottomNavigationAction {...item} key={index} />
            ))}
         </BottomNavigation>
      </Paper>
   )
}

const cfn = {
   container: {
      elevation: 4,
   },

   bottomNav: {
      showLabels: true,
   },
}

export default BottomNav
