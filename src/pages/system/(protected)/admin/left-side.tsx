import {Box, Fade, IconButton, Menu, MenuItem, Typography} from "@mui/material"
import {useState, MouseEvent} from "react"
import {ChangeCircle, Email, MoreVert} from "@mui/icons-material"
import {RoleChip} from "../../../../components"

function LeftSide() {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
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
               <Typography>Ho Thi Nguyet</Typography>
               <RoleChip role={"admin"}/>
            </Box>
            <Typography>nguyet123@gmail.com <Email fontSize={"small"}/></Typography>
         </Box>
         <Box>
            <IconButton onClick={handleOpen}>
               <MoreVert/>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
               <MenuItem>
                  <Typography {...cfn.textOption}>Logout</Typography>
               </MenuItem>
               <MenuItem>
                  <ChangeCircle/>
                  <Typography {...cfn.textOption}>Change Password</Typography>
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
   role: {
      size: "small" as const,
      variant: "filled" as const,
      color: "secondary" as const,
   },
   textOption: {
      sx: {
         marginLeft: "12px",
      }
   }
}

export default LeftSide