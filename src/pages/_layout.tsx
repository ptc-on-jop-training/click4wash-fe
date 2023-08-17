import { Auth0Provider } from "@auth0/auth0-react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Auth0Config } from "../services/auth0"
import { Provider } from "react-redux"
import { RootStore } from "../stores"
import { Theme } from "../styles"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
function RootLayout() {
   return (
      <Provider store={RootStore}>
         <Auth0Provider {...Auth0Config}>
            <ThemeProvider theme={Theme}>
               <CssBaseline>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
                  <Outlet />
                  {/* </LocalizationProvider> */}
               </CssBaseline>
            </ThemeProvider>
         </Auth0Provider>
      </Provider>
   )
}

export default RootLayout
