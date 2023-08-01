import {DataGrid, GridColDef} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {TableToolbar} from "../../../../components"

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
   { field: 'id', headerName: 'Id', flex: 0.1, align: "center", headerAlign: "center" },
   { field: 'locationName', headerName: 'Location', flex: 0.3,align: "center", headerAlign: "center" },
   { field: 'name', headerName: 'Packing Slot', flex: 0.1 ,align: "center", headerAlign: "center"},
   { field: 'address', headerName: 'Address', flex: 0.5,align: "center", headerAlign: "center" },
]
export default PackingSlotTable