import { Box } from "@mui/material"

import { SectionTitle } from "../../../../components"
import TaskList from "./task-list"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../../stores"
import OnHoliday from "./on-holiday"

const TaskPage = () => {
   const isHoliday = useSelector(
      (state: RootStateType) => state.holiday.isHoliday
   )

   console.log(isHoliday)
   
   return (
      <Box >
         <SectionTitle title={"Task Page"} />

         {isHoliday ? <OnHoliday /> : <TaskList />}
      </Box>
   )
}

export default TaskPage
