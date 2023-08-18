import {Route} from "react-router-dom"
import {PageLoading} from "../components"

export default [
   <Route key={"loading-router"} path={"*"} element={<PageLoading/>}/>
]