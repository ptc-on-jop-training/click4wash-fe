import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {RoleChip} from "../../../../components"
import AccountStatus from "./account-status.tsx"
import {Box, SxProps} from "@mui/material"
import { useSelector } from "react-redux"
import {RootStateType} from "../../../../stores"
import AccountTableToolBar from "./account-table-tool-bar.tsx"

interface AccountTableProps {
   sx?: SxProps
}

function AccountTable(props: AccountTableProps)
{
   const accountList = useSelector((state:RootStateType) => state.account.accountList)

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

const columns: GridColDef[] = [
   {field: 'id', headerName: 'Id', flex: 0.3, headerClassName: 'bold-header', align: "center", headerAlign: "center"},
   {field: 'username', headerName: 'User Name', flex: 0.5}, {field: 'email', headerName: 'Email', flex: 0.5},
   {field: 'role', headerName: 'Role', flex: 0.5, renderCell: (params: GridRenderCellParams) => <RoleChip role={params.value}/>},
   {field: 'status', headerName: 'Status', flex: 0.5, renderCell: (params: GridRenderCellParams) => <AccountStatus status={params.value}/>}
]


export default AccountTable