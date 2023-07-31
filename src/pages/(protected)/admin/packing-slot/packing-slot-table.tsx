import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {TableToolbar} from "../../../../components"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import AssignTeamMember from "./assign-team-member.tsx"

interface PackingSlotTableProps {
    sx?: SxProps
}

function PackingSlotTable(props: PackingSlotTableProps) {
   const packingSlotList = useSelector((state: RootStateType) => state.packingSlot.packingSlotList)

   return (
      <DataGrid
         sx={props.sx}
         columns={columns}
         rows={packingSlotList ?? []}
         slots={{
            toolbar: TableToolbar
         }}
      />
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1, headerAlign: 'center', align: 'center'},
   {field: 'locationName', headerName: 'Location', flex: 0.2, headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.2, headerAlign: 'center', align: 'center'},
   {field: 'name', headerName: 'Packing Slot Name', flex: 0.2, headerAlign: 'center', align: 'center'},
   {
      field: 'teamMember', headerName: 'Assign Parking Slot', flex: 0.2, headerAlign: 'center', align: 'center',
      renderCell: (params: GridRenderCellParams) => (<AssignTeamMember params={params}/>),
   },
]

export default PackingSlotTable