import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material"
import {AccountCircle} from "@mui/icons-material"

interface HeaderProps
{
   position?: "sticky"
}

function Header(props: HeaderProps)
{
   return (
      <AppBar position={props.position}>
         <Toolbar {...cfn.toolbar}>
            <Typography>OKAY</Typography>
            <Box>
               <IconButton {...cfn.userMenuBtn}>
                  <AccountCircle/>
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