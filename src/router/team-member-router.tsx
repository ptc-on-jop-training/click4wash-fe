import {Route} from "react-router-dom"
import {TeamMemberPage, BookingsPage,TeamMemberAppLayout, TasksPage} from "../pages"

export default [
   <Route key={"team-member-router"} path={""} element={<TeamMemberAppLayout />}>
      <Route path={""} element={<TeamMemberPage />} />
      <Route path={"booking"} element={<BookingsPage />} />
      <Route path={"Task"} element={<TasksPage />} />
      <Route path={"notice"} element={<TeamMemberPage />} />
   </Route>
]