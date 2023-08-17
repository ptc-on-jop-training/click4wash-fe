import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {RoleChip} from "../../../../components"
import {Box, SxProps} from "@mui/material"
import { useSelector } from "react-redux"
import {RootStateType} from "../../../../stores"
import AccountTableToolBar from "./account-table-tool-bar.tsx"
import CreateSelectAccountStatus from "./create-select-account-status.tsx"
import {useTranslation} from "react-i18next"
interface AccountTableProps {
   sx?: SxProps
}

function AccountTable(props: AccountTableProps)
{
   const accountList = useSelector((state:RootStateType) => state.account.accountList)

   const [t] = useTranslation('trans')

   const columns: GridColDef[] = [
      {field: 'id', headerName: t("admin.AccountTable.id"), flex: 0.3, headerClassName: 'bold-header', align: "center", headerAlign: "center"},
      {field: 'username', headerName: t("admin.AccountTable.userName"), flex: 0.5}, {field: 'email', headerName: t("admin.AccountTable.Email"), flex: 0.5},
      {field: 'role', headerName: t("admin.AccountTable.Role.role"), flex: 0.5, renderCell: (params: GridRenderCellParams) => <RoleChip role={params.value}/>},
      {
         field: 'status',
         headerName: t("admin.AccountTable.Status.status"),
         flex: 0.5,
         renderCell: (params: GridRenderCellParams) => (<CreateSelectAccountStatus status={params.value} id={params.row.id}/>),
      },
   ]

   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={accountList ?? []}
            slots={{toolbar: AccountTableToolBar}}

         />
      </Box>
   )
}

const cfg = {
   container: {

   },
   table: {
      sx: {
         border: "none",
         height: "100%"
      }
   }
}



export default AccountTable