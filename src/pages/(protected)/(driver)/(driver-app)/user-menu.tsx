import {useAuth0} from "@auth0/auth0-react"
import {AccountCircle} from "@mui/icons-material"
import {IconButton, Menu, MenuItem} from "@mui/material"
import {useState, MouseEvent} from "react"

function UserMenu()
{
   const {logout} = useAuth0()
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)

   const handleOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <IconButton onClick={handleOpen} {...cfn.userMenuBtn}>
            <AccountCircle/>
         </IconButton>
         <Menu
            anchorEl={anchorEl} open={open} onClose={handleClose}
         >
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
         </Menu>
      </>
   )
}

const cfn = {
   userMenuBtn: {
      color: "inherit" as const,
   },
}

export default UserMenu