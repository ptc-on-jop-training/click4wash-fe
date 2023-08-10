import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid'
import { Box, SxProps } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../stores'
import BookingStatus from './booking-status.tsx'
import TypeVehicle from './type-vehicle.tsx'
import {FormatTimeSlot, TimeSlots} from "../../../../services/api"



interface BookingTableProps {
   sx?: SxProps
}

function BookingTable(props: BookingTableProps) {
   const bookingList = useSelector((state: RootStateType) => state.booking.bookingList)

   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={bookingList ?? []}
            slots={{ toolbar: GridToolbar }}
         />
      </Box>
   )
}

const cfg = {
   table: {
      sx: {
         border: 'none',
         height: '100%'
      }
   }
}

const columns: GridColDef[] = [
   {field: 'vehicleNumberPlate', headerName: 'Number plate', flex: 0.5},
   {field: 'createdAt', headerName: 'Day', flex:0.5},
   {field: 'timeSlot', headerName: 'Time slot', flex:0.5, renderCell:(params) => FormatTimeSlot(TimeSlots[params.value as keyof typeof TimeSlots])},
   {field: 'parkingSlotName', headerName: 'Parking slot', flex: 0.5},
   {field: 'vehicleType', headerName: 'Type', flex: 0.5, renderCell: (params: GridRenderCellParams) => <TypeVehicle type={params.value} />},
   {field: 'status', headerName: 'Status', flex: 0.5, renderCell: (params: GridRenderCellParams) => <BookingStatus status={params.value} />}
]

export default BookingTable
