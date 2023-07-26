import {Auth0Provider} from "@auth0/auth0-react"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {Outlet} from "react-router-dom"
import {Auth0Config} from "../services/auth0"
import {Theme} from "../styles"
import { Provider } from 'react-redux'
import {RootStore} from "../stores"

function RootLayout()
{
   return (
      <Provider store={RootStore}>
         <Auth0Provider {...Auth0Config}>
            <ThemeProvider theme={Theme}>
               <CssBaseline>
                  <Outlet/>
               </CssBaseline>
            </ThemeProvider>
         </Auth0Provider>
      </Provider>
   )
}

export default RootLayout