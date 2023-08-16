import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import ParkingSlotToolBar from "./parking-slot-toolbar.tsx"

interface PackingSlotTableProps {
   sx?: SxProps
}

function ParkingSlotTable(props: PackingSlotTableProps) {

   const parkingSlotList = useSelector((state: RootStateType) => state.parkingSlot.parkingSlotList)

   return (
      <DataGrid
         sx={props.sx}
         columns={columns}
         rows={parkingSlotList ?? []}
         slots={{
            toolbar: ParkingSlotToolBar
         }}      />
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'Id', flex: 0.1, align: "center", headerAlign: "center"},
   {field: 'locationName', headerName: 'Location', flex: 0.3, align: "center", headerAlign: "center"},
   {field: 'name', headerName: 'Parking Slot', flex: 0.1, align: "center", headerAlign: "center"},
   {field: 'address', headerName: 'Address', flex: 0.5, align: "center", headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => {
         const addressValue = params.row.address || {}
         return Object.values(addressValue).join(', ')}
   }
]

export default ParkingSlotTable