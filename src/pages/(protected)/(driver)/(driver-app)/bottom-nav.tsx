import {BottomNavigation, BottomNavigationAction, Paper, SxProps} from "@mui/material"
import {DirectionsCar, AddBox, Home} from '@mui/icons-material'
import {merge} from "lodash"
import {SyntheticEvent, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import CreateBookingModal from "./create-booking-modal.tsx"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType, SetCreateBookingFromIsOpen} from "../../../../stores"

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
      label: "car",
      value: "car",
      icon: <DirectionsCar/>
   },
]

function BottomNav(props: BottomNavProps)
{
   const dispatch = useDispatch()
   const location = useLocation()
   const nav = useNavigate()

   const [value, setValue] = useState(location.pathname.substring(1))
   const isCreateBookingModalOpen = useSelector((state: RootStateType) => state.createBookingForm.isOpen)

   const handleSwitchRoute = (_: SyntheticEvent, newValue: any) =>
   {
      if (newValue === "wash") {
         dispatch(SetCreateBookingFromIsOpen(true))
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
         <CreateBookingModal isOpen={isCreateBookingModalOpen} handleClose={() => dispatch(SetCreateBookingFromIsOpen(false))}/>
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