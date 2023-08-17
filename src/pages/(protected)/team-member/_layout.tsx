import { Box, Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "./header.tsx"
import BottomNav from "./bottom-nav.tsx"

function TeamMemberAppLayout() {
   return (
      <Box>
         <Header {...cfn.header} />
         <Container {...cfn.outletCont}>
            <Outlet />
         </Container>
         <BottomNav {...cfn.bottomNav} />
      </Box>
   )
}

const cfn = {
   header: {
      position: "sticky" as const,
   },

   outletCont: {
      sx: {
         maxWidth : "sm",
         paddingTop: 1.5,
      },
   },

   bottomNav: {
      sx: {
         position: "fixed",
         bottom: 0,
         left: 0,
         right: 0,
      },
   },
}

export default TeamMemberAppLayout
