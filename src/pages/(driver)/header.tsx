import {AppBar, AppBarProps, IconButton, Toolbar} from "@mui/material"
import {Menu, AccountCircle} from '@mui/icons-material'
import Logo from "./logo.tsx"

interface HeaderProps
{
   containerProps?: AppBarProps
}

function Header(props: HeaderProps)
{
   return (
      <AppBar {...props.containerProps}>
         <Toolbar>
            <IconButton {...cfn.menuIconBtn}><Menu/></IconButton>
            <Logo {...cfn.logo}/>
            <IconButton {...cfn.useIconBtn}><AccountCircle/></IconButton>
         </Toolbar>
      </AppBar>
   )
}

const cfn = {

   logo: {
      containerProps: {
         sx: {
            flexGrow: 1
         }
      }
   },

   menuIconBtn: {
      color: "inherit" as const,
      size: "large" as const,
      edge: "start" as const
   },

   useIconBtn: {
      color: "inherit" as const,
      size: "large" as const,
      edge: "end" as const
   }
}

export default Header