import {Container} from "@mui/material"
import {Outlet} from "react-router-dom"
import BottomNavBar from "./bottom-nav-bar.tsx"

function BottomNavLayout()
{
   return (
      <Container>
         <Outlet/>
         <BottomNavBar {...cfn.bottomNavBar}/>
      </Container>
   )
}

const cfn = {
   bottomNavBar: {
      containerProps: {
         sx: {
            position: "fixed",
            width: "100%",
            bottom: 0,
            left: 0
         }
      }
   }
}

export default BottomNavLayout