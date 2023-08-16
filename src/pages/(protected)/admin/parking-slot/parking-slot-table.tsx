import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import ParkingSlotToolBar from "./parking-slot-toolbar.tsx"
import ParkingSlotStatus from "./parking-slot-status.tsx"

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
   {field: 'id', headerName: 'Id', flex: 0.2, align: "center", headerAlign: "center"},
   {field: 'locationName', headerName: 'Location', flex: 0.2},
   {field: 'name', headerName: 'Parking Slot', flex: 0.2,},
   {field: 'address', headerName: 'Address', flex: 0.4,
      renderCell: (params: GridRenderCellParams) => {
         const addressValue = params.row.address || {}
         return Object.values(addressValue).join(', ')}
   },
   {field: 'status', headerName: 'Status', flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
         <ParkingSlotStatus isBusy={params.row.isBusy}/>
      ),
   },
]

export default ParkingSlotTable