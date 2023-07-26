import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {TableToolbar} from "../../../../components";
interface PackingSlotTableProps {
   sx?: SxProps
}

export const PackingSlotData = [
   {
      id:'1',
      address: "101B Le Huu Trac",
      name: "Etown 3",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'2',
      address: "101B Le Huu Trac",
      name: "Etown 5",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'3',
      address: "101B Le Huu Trac",
      name: "Etown 1",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'4',
      address: "101B Le Huu Trac",
      name: "Etown 3",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'5',
      address: "101B Le Huu Trac",
      name: "Etown 3",
      teamMember:"Ho Thi Nguyet"
   },
]

function PackingSlotTable(props: PackingSlotTableProps) {

   return (
      <DataGrid
         sx={props.sx}
         columns={columns}
         rows={PackingSlotData}
         slots={{
            toolbar: TableToolbar
         }}
      />
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1,headerAlign: 'center', align: 'center'},
   {field: 'name', headerName: 'Packing Name', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'teamMember', headerName: 'Assign Parking Slot', flex: 0.2,headerAlign: 'center', align: 'center'},
]

export default PackingSlotTable