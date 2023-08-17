import React from 'react'
import ReactDOM from 'react-dom/client'
import {RootRouter} from "./router"
import i18next from "./i18next.ts"
import {I18nextProvider} from "react-i18next"

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <I18nextProvider i18n={i18next}>
         <RootRouter/>
      </I18nextProvider>
   </React.StrictMode>,
)
