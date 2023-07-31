import {DataGrid, GridColDef, GridRenderEditCellParams} from '@mui/x-data-grid'
import {SxProps} from "@mui/material"
import LocationToolBar from "./location-toolbar.tsx"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import AssignTeamMember from "./assign-team-member.tsx"

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
   {field: 'name', headerName: 'Location', flex: 0.2, headerAlign: 'center', align: 'center'},
   {field: 'address', headerName: 'Address', flex: 0.2, headerAlign: 'center', align: 'center'},
   {
      field: 'teamMember', headerName: 'Assigner', flex: 0.2, headerAlign: 'center', align: 'center',
      renderCell: (params: GridRenderEditCellParams) => (<AssignTeamMember params={params}/>),
   },

]

export default LocationTable