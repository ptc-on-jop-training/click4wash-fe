import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import ParkingSlotToolBar from "./parking-slot-toolbar.tsx"
import ParkingSlotStatus from "./parking-slot-status.tsx"
import {useTranslation} from "react-i18next"

interface PackingSlotTableProps {
   sx?: SxProps
}

function ParkingSlotTable(props: PackingSlotTableProps) {

   const parkingSlotList = useSelector((state: RootStateType) => state.parkingSlot.parkingSlotList)

   const [t] = useTranslation('trans')

   const columns: GridColDef[] = [
      {field: 'id', headerName: t("admin.ParkingSlot.id"), flex: 0.2, align: "center", headerAlign: "center"},
      {field: 'locationName', headerName: t("admin.ParkingSlot.location"), flex: 0.2},
      {field: 'name', headerName:  t("admin.ParkingSlot.parkingSlot"), flex: 0.2,},
      {field: 'address', headerName: t("admin.ParkingSlot.address"), flex: 0.4,
         renderCell: (params: GridRenderCellParams) => {
            const addressValue = params.row.address || {}
            return Object.values(addressValue).join(', ')}
      },
      {field: 'status', headerName: t("admin.ParkingSlot.Status.status"), flex: 0.2,
         renderCell: (params: GridRenderCellParams) => (
            <ParkingSlotStatus isBusy={params.row.isBusy}/>
         ),
      },
   ]
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



export default ParkingSlotTable