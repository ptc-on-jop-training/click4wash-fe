import {ReactNode} from "react"
import EmptySide from "./empty-side.tsx"
import LeftSide from "./left-side.tsx"
import {Box} from "@mui/material"


interface DashboardLayoutProps {
   leftSide?: ReactNode
   main?: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
   return (
      <Box {...styles.wrapper}>
         <Box {...styles.wrap.main}>
            <Box {...styles.wrap.leftSide}>
               <>{props.leftSide ?? <EmptySide/>}</>
               <LeftSide/>
            </Box>
            <Box>
               {props.main}
            </Box>
         </Box>
      </Box>
   )
}

const styles = {
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
            justifyContent:"space-between",
         },
      },
   },
}
export default DashboardLayout