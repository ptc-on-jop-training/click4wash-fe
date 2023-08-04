import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {Box, SxProps} from "@mui/material"
import GeneralConditionsToolbar from "./general-condition-toolbar.tsx"
import {RootStateType} from "../../../../stores"
import {useSelector} from "react-redux"

interface GeneralConditionsProps {
    sx?: SxProps
}

function GeneralConditionsTable(props: GeneralConditionsProps)
{
   const GeneralConditionList = useSelector((state: RootStateType) => state.generalCondition.generalCondition)

   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={GeneralConditionList ?? []}
            slots={{toolbar: GeneralConditionsToolbar}}
         />
      </Box>
   )
}

const cfg = {
   table: {
      sx: {
         border: "none",
         height: "100%"
      }
   }
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1, headerClassName: 'bold-header', align: "center", headerAlign: "center"},
   {field: 'generalCondition', headerName: 'General Conditions', flex: 0.5,align: "center", headerAlign: "center"},

]

export default GeneralConditionsTable