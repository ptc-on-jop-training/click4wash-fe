import React from 'react'
import ReactDOM from 'react-dom/client'
import {RootRouter} from "./router"

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RootRouter/>
   </React.StrictMode>,
)
