import {DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel} from '@mui/x-data-grid'
import {Box, SxProps} from "@mui/material"
import LocationToolBar from "./location-toolbar.tsx"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {setSelectedLocationById} from "../../../../stores/location-store.ts"

interface LocationTableProps {
    sx?: SxProps
}

function LocationTable(props: LocationTableProps) {
   
   const dispatch = useDispatch()
   
   const LocationList = useSelector((state: RootStateType) => state.location.locationList)
   
   const LocationSelected = useSelector((state: RootStateType) => state.location.locationSelected)
   
   const handleRowSelection = (rowSelectionModel: GridRowSelectionModel) => {
      dispatch(setSelectedLocationById({id: rowSelectionModel[0] as string}))
   }
   
   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={LocationList ?? []}
            rowSelectionModel={LocationSelected != null ? [LocationSelected?.id] : undefined}
            onRowSelectionModelChange={handleRowSelection}
            slots={{toolbar: LocationToolBar}}
         />
      </Box>
   )
}

const columns: GridColDef[] = [
   {field: 'id', headerName: 'ID', flex: 0.1, headerAlign: 'center', align: 'center'},
   {field: 'name', headerName: 'Location', flex: 0.4, headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.4, renderCell: (params: GridRenderCellParams) => {
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