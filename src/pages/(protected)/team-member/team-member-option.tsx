import { MouseEvent, useState } from "react"
import {
   Menu,
   MenuItem,
   Fade,
   ListItemText,
   Stack,
   Switch,
} from "@mui/material"
import { Nightlife, Logout } from "@mui/icons-material"
import { useAuth0 } from "@auth0/auth0-react"
import { AccountCircle } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { RootStateType, useRootDispatch } from "../../../stores"
import { setHolidayReducer } from "../../../stores/holiday-store"
// import HolidayModal from "./holiday-modal"

const UserOptionMenu = () => {
   const dispatch = useRootDispatch()
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   // const [isOpenModal, setOpenModal] = useState<boolean>(false)
   const isHoliday = useSelector(
      (state: RootStateType) => state.holiday.isHoliday
   )
   const open = Boolean(anchorEl)
   const { logout } = useAuth0()

   const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleMenuClose = () => {
      setAnchorEl(null)
   }
   const handleSetHoliday = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHolidayReducer(event.target.checked))
   }

   return (
      <>
         <Stack onClick={handleMenuOpen}>
            <AccountCircle />
         </Stack>

         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
         >
            <MenuItem>
               <Stack direction="row" spacing={1}>
                  <Logout />
                  <ListItemText onClick={() => logout()}>Logout</ListItemText>
               </Stack>
            </MenuItem>

            <MenuItem>
               <Stack direction="row" spacing={1} alignItems={"center"}>
                  <Nightlife />
                  <ListItemText>Set Holiday</ListItemText>
                  <Switch checked={isHoliday} onChange={handleSetHoliday} />
               </Stack>
            </MenuItem>
         </Menu>
         {/* <HolidayModal
            isOpen={isOpenModal}
            handleClose={() => setOpenModal(false)}
         /> */}
      </>
   )
}

export default UserOptionMenu
