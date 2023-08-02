import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {Box, SxProps} from "@mui/material"
import LocationToolBar from "./location-toolbar.tsx"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"

interface LocationTableProps {
    sx?: SxProps
}

function LocationTable(props: LocationTableProps) {
   const LocationList = useSelector((state: RootStateType) => state.location.locationList)
   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={LocationList ?? []}
            slots={{toolbar: LocationToolBar}}
         />
      </Box>
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

const cfg = {
   table: {
      sx: {
         border: "none",
         height: "100%"
      }
   }
}

export default LocationTable