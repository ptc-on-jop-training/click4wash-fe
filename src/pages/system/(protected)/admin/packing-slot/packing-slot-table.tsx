import Box from '@mui/material/Box'
import {DataGrid, GridColDef,} from '@mui/x-data-grid'
import PackingSlotToolbar from "./packing-slot-tool-bar.tsx"
import {PackingSlot} from "./data/packing-slot.tsx"
import AssignParkingSlot from "./assign-parking-slot.tsx"
import {Chip} from "@mui/material"

function PackingSlotTable() {
   return (
      <Box {...cfn.wrapper}>
         <DataGrid
            {...cfn.tableWrapper}
            density={"comfortable"} columns={columns} rows={PackingSlot ?? []}
            slots={{toolbar: PackingSlotToolbar}}
         />
      </Box>
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1, headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.2,},
   {
      field: 'parkingSlot', headerName: 'Parking slot', flex: 0.1, headerAlign: 'center', align: 'center',
      renderCell: () => <Chip label="A" color="success"/>,
   },
   {field: 'parkingSlotNumber', headerName: 'Parking slot number', flex: 0.175, headerAlign: 'center', align: 'center'},
   {
      field: 'assign', headerName: 'Assign Parking Slot', flex: 0.2,
      renderCell: () => <AssignParkingSlot/>,
   },
]

const cfn = {
   wrapper: {
      sx: {
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
         overflow: "hidden",
      }
   },
   tableWrapper: {
      sx: {
         border: "none",
      }
   },
}
export default PackingSlotTable