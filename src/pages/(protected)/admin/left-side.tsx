import {Box, Chip, Fade, IconButton, ListItemText, Menu, MenuItem} from "@mui/material"
import {useState, MouseEvent} from "react"
import {ChangeCircle, Email, MoreVert} from "@mui/icons-material"
import {useAuth0} from "@auth0/auth0-react"

function LeftSide() {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const {logout} = useAuth0()
   const handleOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   return (
      <Box {...cfn.wrapper}>
         <Box>
            <Box {...cfn.topSection}>
               <p style={cfn.userName}>Ho Thi Nguyet</p>
               <Chip label="admin" color="primary"/>
            </Box>
            <p style={cfn.userEmail}>nguyet123@gmail.com <Email fontSize={"small"}/></p>
         </Box>
         <Box>
            <IconButton onClick={handleOpen}>
               <MoreVert/>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
               <MenuItem>
                  <ListItemText {...cfn.textOption} onClick={() => logout()}>Logout</ListItemText>
               </MenuItem>
               <MenuItem>
                  <ChangeCircle/>
                  <ListItemText {...cfn.textOption}>Change Password</ListItemText>
               </MenuItem>
            </Menu>
         </Box>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         borderTop: "1px solid #c7c3c3",
         paddingLeft: "1.25rem",
         paddingRight: "1.25rem",
         paddingTop: "1rem",
         paddingBottom: " 1rem",
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
      }
   },
   topSection: {
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "0.5rem",
      }
   },
   textOption: {
      sx: {
         marginLeft: "12px",
      }
   },
   userName: {
      margin: '0px',
      fontWeight: 'bold',
   },
   userEmail: {
      margin: '0px',
      display: 'flex',
      gap: "0.5rem",
   }
}

export default LeftSide