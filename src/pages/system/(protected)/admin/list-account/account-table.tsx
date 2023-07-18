import {DataGrid, GridRenderCellParams,GridColDef} from '@mui/x-data-grid'
import { useEffect, useState} from "react"
import AccountStatus from "./account-status.tsx"
import AccountToolbar from "./account-tool-bar.tsx"
import RoleChip from "./role-chip.tsx"



export interface AccountRes {
    id:string
    fullName:string
    phoneNumber:string
    email:string
    role:string
    isActive:boolean

}




interface BookingTableProps
{
    accountList:AccountRes[]
}


function AccountTable(props:BookingTableProps) {
   const [rows,setRows] = useState<any[]>([])
   useEffect(() =>{
      setRows( props.accountList?.map((account)=> {
         return{ id:account.id, fullName:account.fullName,email:account.email,phoneNumber:account.phoneNumber,role:account.role,status:account.isActive
         }
      }))
   },
   [props.accountList]
   )
   return (
      <DataGrid
         columns={columns}
         rows={rows}
         slots={{
            toolbar: AccountToolbar,
         }}
      />


   )
}


const columns: GridColDef[] = [
   {field: 'id', headerName: 'Id',flex: 0.3, headerClassName: 'bold-header', align:"center", headerAlign:"center"},
   {field: 'fullName', headerName: 'Full Name', flex: 0.5},
   {field: 'email', headerName: 'Email', flex: 0.5},
   {field: 'phoneNumber', headerName: 'Phone Number', flex: 0.5},
   {field: 'role', headerName: 'Role', flex: 0.5,renderCell: (params: GridRenderCellParams) => <RoleChip role={params.value}/>},
   {field: 'status', headerName: 'Status', flex: 0.5,renderCell: (params: GridRenderCellParams) => <AccountStatus isActive={!!params.value}/>}
]


export default AccountTable