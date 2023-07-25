import {MouseEvent, useState} from "react"
import { Menu, MenuItem, IconButton, Fade, ListItemText } from "@mui/material"
import { ChangeCircle, MoreVert } from "@mui/icons-material"
import { useAuth0 } from "@auth0/auth0-react"

const UserOptionMenu = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const {logout} = useAuth0()

   const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <IconButton onClick={handleMenuOpen}>
            <MoreVert />
         </IconButton>
         <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} TransitionComponent={Fade}>
            <MenuItem>
               <ListItemText onClick={() => logout()}>Logout</ListItemText>
            </MenuItem>
            <MenuItem>
               <ChangeCircle />
               <ListItemText>Change Password</ListItemText>
            </MenuItem>
         </Menu>
      </>
   )
}

export default UserOptionMenu
