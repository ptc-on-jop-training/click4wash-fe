import {BottomNavigation, BottomNavigationAction, Paper, PaperProps} from "@mui/material"
import {DirectionsCar, Notifications, AddBox, Home} from '@mui/icons-material'
import {merge} from "lodash"

interface BottomNavBarProps
{
   containerProps?: PaperProps
}

function BottomNavBar(props: BottomNavBarProps)
{
   return (
      <Paper {...merge(cfn.container, props.containerProps)} elevation={10}>
         <BottomNavigation value={"home"}>
            <BottomNavigationAction label={"home"} value={"home"} icon={<Home/>}/>
            <BottomNavigationAction label={"wash"} value={"wash"} icon={<AddBox/>}/>
            <BottomNavigationAction label={"notice"} value={"notice"} icon={<Notifications/>}/>
            <BottomNavigationAction label={"cars"} value={"cars"} icon={<DirectionsCar/>}/>
         </BottomNavigation>
      </Paper>
   )
}

const cfn = {
   container: {
   }
}

export default BottomNavBar