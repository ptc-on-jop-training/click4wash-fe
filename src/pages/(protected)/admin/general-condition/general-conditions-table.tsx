import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {Box, SxProps} from "@mui/material"
import GeneralConditionsToolbar from "./general-condition-toolbar.tsx"
import {RootStateType} from "../../../../stores"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

interface GeneralConditionsProps {
    sx?: SxProps
}

function GeneralConditionsTable(props: GeneralConditionsProps)
{
   const GeneralConditionList = useSelector((state: RootStateType) => state.generalCondition.generalCondition)
   const [t] = useTranslation('trans')
    

   const columns: GridColDef[] = [
      {field: 'id', headerName: t("admin.GeneralConditionTable.id"), flex: 0.1, headerClassName: 'bold-header', align: "center", headerAlign: "center"},
      {field: 'generalCondition', headerName: t("admin.GeneralConditionTable.generalCondition"), flex: 0.5,align: "center", headerAlign: "center"},

   ]
    
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



export default GeneralConditionsTable