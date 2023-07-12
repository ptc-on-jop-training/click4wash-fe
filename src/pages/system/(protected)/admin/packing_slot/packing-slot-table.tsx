import Box from '@mui/material/Box'
import {
   DataGrid, GridColDef,
} from '@mui/x-data-grid'
import PackingSlotToolbar from "./packing-slot-tool-bar.tsx"
import {RoleChip} from "../../../../../components"
const columns: GridColDef[] = [
   {field: 'id', headerName: 'N.o', flex: 0.1,headerAlign: 'center',align:'center'},
   {field: 'address', headerName: 'Address', flex: 0.3, },
   {field: 'parkingSlot', headerName: 'Parking slot', flex: 0.1,
      renderCell: (params) => <RoleChip label={"A"} {...{ params }} />,
   },
   {field: 'parkingSlotNumber', headerName: 'Parking slot number', flex: 0.15},
   {field: 'assigned', headerName: 'Assigned', flex: 0.25},
]

const rows = [
   {
      id: 1,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 2,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 3,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 4,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 5,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 6,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 7,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 8,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 9,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
   {
      id: 10,
      address: '900 au co, phuong 14,tan binh,Ho Chi Minh',
      parkingSlotNumber: 35,
      assigned: "Ho Thi Nguyet"
   },
]
function PackingSlotTable() {
   return (
      <Box {...styles.wrapper}>
         <DataGrid
            {...styles.tableWrapper}
            density={"comfortable"} columns={columns} rows={rows ?? []}
            slots={{toolbar: PackingSlotToolbar}}
         />
      </Box>
   )
}

const styles = {
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