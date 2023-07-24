import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"

interface PackingSlotTableProps {
   sx?: SxProps
}

export const PackingSlotData = [
   {
      id:'1',
      address: "101B Le Huu Trac",
      packingName: "A",
      packingNumber: "1",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'2',
      address: "101B Le Huu Trac",
      packingName: "B",
      packingNumber: "20",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'3',
      address: "101B Le Huu Trac",
      packingName: "C",
      packingNumber: "8",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'4',
      address: "101B Le Huu Trac",
      packingName: "B",
      packingNumber: "5",
      teamMember:"Ho Thi Nguyet"
   },
   {
      id:'5',
      address: "101B Le Huu Trac",
      packingName: "E",
      packingNumber: "7",
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
            toolbar: GridToolbar
         }}
      />
   )
}

const columns: GridColDef[] = [
   {field: 'address', headerName: 'Address', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'packingName', headerName: 'Packing Name', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'packingNumber', headerName: 'Parking Number', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'teamMember', headerName: 'Assign Parking Slot', flex: 0.2,headerAlign: 'center', align: 'center'},
]

export default PackingSlotTable