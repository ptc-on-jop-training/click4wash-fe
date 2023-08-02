import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import LocationToolBar from "./location-toolbar.tsx"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"

interface LocationTableProps {
    sx?: SxProps
}

function LocationTable(props: LocationTableProps) {
   const LocationList = useSelector((state: RootStateType) => state.location.locationList)

   return (
      <DataGrid
         sx={props.sx}
         columns={columns}
         rows={LocationList ?? []}
         slots={{
            toolbar: LocationToolBar
         }}
      />
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1, headerAlign: 'center', align: 'center'},
   {field: 'name', headerName: 'Location', flex: 0.4, headerAlign: 'center', align: 'center'},
   {
      field: 'address', headerName: 'Address', flex: 0.4, renderCell: (params: GridRenderCellParams) => {
         const addressValue = params.row.address || {}
         return Object.values(addressValue).join(', ')
      }
   }
]

export default LocationTable