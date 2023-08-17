import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material"
import {AccountCircle, Language} from "@mui/icons-material"
import UserOptionMenu from "./team-member-option"

interface HeaderProps
{
   position?: "sticky"
}

function Header(props: HeaderProps)
{
   return (
      <AppBar position={props.position}>
         <Toolbar {...cfn.toolbar}>
            <Typography>Click4Wash</Typography>
            <Box>
               <IconButton {...cfn.langMenuBtn}>
                  <Language/>
               </IconButton>
               <IconButton {...cfn.userMenuBtn}>
                  <UserOptionMenu/>
               </IconButton>
            </Box>
         </Toolbar>
      </AppBar>
   )
}

const cfn = {
   toolbar: {
      sx: {
         display: "flex",
         justifyContent: "space-between"
      }
   },

   userMenuBtn: {
      color: "inherit" as const,
   },
   userMenuIcon: {
   },

   langMenuBtn: {
      color: "inherit" as const,
   },
}

export default Header