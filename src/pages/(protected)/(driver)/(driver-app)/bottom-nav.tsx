import {BottomNavigation, BottomNavigationAction, Paper, SxProps} from "@mui/material"
import {DirectionsCar, Notifications, AddBox, Home} from '@mui/icons-material'
import {merge} from "lodash"
import {SyntheticEvent, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"

interface BottomNavProps
{
   sx?: SxProps
}

const navData = [
   {
      label: "home",
      value: "",
      icon: <Home/>
   },
   {
      label: "wash",
      value: "wash",
      icon: <AddBox/>
   },
   {
      label: "notice",
      value: "notice",
      icon: <Notifications/>
   },
   {
      label: "car",
      value: "car",
      icon: <DirectionsCar/>
   },
]

function BottomNav(props: BottomNavProps)
{
   const location = useLocation()
   const [value, setValue] = useState(location.pathname.substring(1))
   const nav = useNavigate()

   const handleSwitchRoute = (_: SyntheticEvent, newValue: any) => {
      setValue(newValue)

      if (newValue === "wash") {
         console.log("wash")
         return
      }

      nav(newValue)
   }

   return (
      <Paper {...merge(cfn.container, {sx: props.sx})}>
         <BottomNavigation {...cfn.bottomNav} value={value} onChange={handleSwitchRoute}>
            {navData.map((item, index) => (
               <BottomNavigationAction {...item} key={index}/>
            ))}
         </BottomNavigation>
      </Paper>
   )
}

const cfn = {
   container: {
      elevation: 4
   },

   bottomNav: {
      showLabels: true
   }
}

export default BottomNav