import {Outlet} from "react-router-dom"
import {CssBaseline, ThemeProvider} from "@mui/material"
import Theme from "./theme.ts"

function RootLayout()
{
   return (
      <ThemeProvider theme={Theme}>
         <CssBaseline>
            <Outlet/>
         </CssBaseline>
      </ThemeProvider>
   )
}

export default RootLayout