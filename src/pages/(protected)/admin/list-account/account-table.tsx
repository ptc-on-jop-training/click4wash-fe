import {DataGrid, GridRenderCellParams, GridColDef,GridToolbar} from '@mui/x-data-grid'
import {useEffect, useState} from "react"
import RoleChip from "../../../../components/data-display/role-chip.tsx"
import AccountResponse from "../../../../services/auth0/dtos/account-response.ts"
import AccountStatus from "./account-status.tsx"
import {SxProps} from "@mui/material"
import {merge} from "lodash"

interface AccountTableProps {
    accountList: AccountResponse[],
    sx?: SxProps
}



function AccountTable(props: AccountTableProps) {
   const [rows, setRows] = useState<any[]>([])
   useEffect(() =>{
      setRows( props.accountList?.map((account)=> {
         return{
            id: account.id,
            fullName: account.username,
            email: account.email,
            role: account.role,
            status: account.status
         }
      }))},[props.accountList]
   )
   return (
      <DataGrid
         {...merge(cfg.sx,{sx: props.sx})}
         columns={columns}
         rows={rows}
         slots={{
            toolbar: GridToolbar
         }}
      />
   )
}


const cfg = {
   sx: {
      border: "none"
   }
}


const columns: GridColDef[] = [
   {field: 'id', headerName: 'Id', flex: 0.3, headerClassName: 'bold-header', align: "center", headerAlign: "center"},
   {field: 'fullName', headerName: 'Full Name', flex: 0.5},
   {field: 'email', headerName: 'Email', flex: 0.5},
   {field: 'role', headerName: 'Role', flex: 0.5, renderCell: (params: GridRenderCellParams) => <RoleChip role={params.value}/>},
   {field: 'status', headerName: 'Status', flex: 0.5, renderCell: (params: GridRenderCellParams) => <AccountStatus status={params.value}/>}
]




export default AccountTable