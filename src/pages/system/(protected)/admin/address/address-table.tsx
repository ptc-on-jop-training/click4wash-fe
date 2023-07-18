import Box from '@mui/material/Box'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import AddressToolBar from "./address-tool-bar.tsx"
import {Address} from "../packing-slot/data/address.ts"

function AddressTable() {

   return (
      <Box {...cfn.wrapper}>
         <DataGrid
            {...cfn.tableWrapper}
            density={"comfortable"} columns={columns} rows={Address ?? []}
            slots={{toolbar: AddressToolBar}}
         />
      </Box>
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'N.o', flex: 0.05, headerAlign: 'center', align: 'center'},
   {field: 'name', headerName: 'Name', flex: 0.1,headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.2,headerAlign: 'center', align: 'center'},
   {field: 'time', headerName: 'Time lot', flex: 0.1},
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
export default AddressTable