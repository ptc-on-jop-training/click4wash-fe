import {Auth0Provider} from "@auth0/auth0-react"
import {CssBaseline, ThemeProvider} from "@mui/material"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RootRouter} from "./router"
import {Auth0Config} from "./services/auth0"
import {RootStore} from "./stores"
import { Provider } from 'react-redux'
import {Theme} from "./styles"
import i18next from "./i18next.ts"
import {I18nextProvider} from "react-i18next"

ReactDOM.createRoot(document.getElementById('root')!).render(
   <I18nextProvider i18n={i18next}>
      <React.StrictMode>
         <Provider store={RootStore}>
            <Auth0Provider {...Auth0Config}>
               <ThemeProvider theme={Theme}>
                  <CssBaseline>
                     <RootRouter/>
                  </CssBaseline>
               </ThemeProvider>
            </Auth0Provider>
         </Provider>
      </React.StrictMode>
   </I18nextProvider>,
)
