import {BottomNavigation, BottomNavigationAction, Paper, SxProps} from "@mui/material"
import {DirectionsCar, Notifications, AddBox, Home} from '@mui/icons-material'
import {merge} from "lodash"
import {SyntheticEvent, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import CreateBookingModal from "./create-booking-modal.tsx"

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
   const nav = useNavigate()

   const [value, setValue] = useState(location.pathname.substring(1))
   const [isCreateBookingModalOpen, setIsCreateBookingModalOpen] = useState<boolean>(false)

   const handleSwitchRoute = (_: SyntheticEvent, newValue: any) =>
   {
      if (newValue === "wash") {
         setIsCreateBookingModalOpen(true)
      } else {
         setValue(newValue)
         nav(newValue)
      }
   }

   return (
      <>
         <Paper {...merge(cfn.container, {sx: props.sx})}>
            <BottomNavigation {...cfn.bottomNav} value={value} onChange={handleSwitchRoute}>
               {navData.map((item, index) => (
                  <BottomNavigationAction {...item} key={index}/>
               ))}
            </BottomNavigation>
         </Paper>
         <CreateBookingModal isOpen={isCreateBookingModalOpen} handleClose={() => setIsCreateBookingModalOpen(false)}/>
      </>
   )
}

const cfn = {
   container: {
      elevation: 4
   },

   bottomNav: {
      // showLabels: true
   }
}

export default BottomNav