import {ReactNode, useEffect} from "react"
import EmptySide from "./empty-side.tsx"
import LeftSide from "./left-side.tsx"
import {Box} from "@mui/material"
import {Outlet} from "react-router-dom"
import TabNav from "./tab-nav.tsx"
import {useRootDispatch, FetchAccountList, FetchBookingList} from "../../../stores"

interface DashboardLayoutProps {
   leftSide?: ReactNode
   main?: ReactNode
}

function AdminLayout(props: DashboardLayoutProps)
{
   const dispatch = useRootDispatch()

   useEffect(() => {
      dispatch(FetchAccountList())
   }, [])
   useEffect(() => {
      dispatch(FetchBookingList())
   }, [])

   return (
      <Box {...cfn.wrapper}>
         <Box {...cfn.wrap.main}>
            <Box {...cfn.wrap.leftSide}>
               {props.leftSide ?? <EmptySide/>}
               <LeftSide/>
            </Box>
            <Box>
               <TabNav {...cfn.rightIcon}/>
               <Box sx={{height: "100%"}}>
                  <Outlet/>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         height: "100vh",
         padding: "40px",
         backgroundColor: "#edf2f7",
      },
   },
   wrap: {
      main: {
         sx: {
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            backgroundColor: "white",
            height: "100%",
            borderRadius: "16px",
            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
         },
      },
      leftSide: {
         sx: {
            borderRight: "1px solid #c7c3c3",
            height: "100%",
            display: "flex",
            flexDirection: "column",
         },
      },
      mainSide: {
         sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
         },
      },
   },
   rightIcon: {
      sx: {
         marginRight: 2
      }
   }
}
export default AdminLayout