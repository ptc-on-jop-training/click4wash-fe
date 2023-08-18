import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import UserMenu from "./user-menu.tsx"

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
               {/*<IconButton {...cfn.userMenuBtn}>*/}
               {/*   <AccountCircle/>*/}
               {/*</IconButton>*/}
               <UserMenu/>
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