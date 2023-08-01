import {DataGrid, GridColDef, GridRenderCellParams, GridToolbar} from '@mui/x-data-grid'
import {Box, SxProps} from "@mui/material"
import { useSelector } from "react-redux"
import {RootStateType} from "../../../../stores"
import BookingStatus from "./booking-status.tsx"
import TypeVehicle from "./type-vehicle.tsx"


interface BookingTableProps {
   sx?: SxProps
}

function BookingTable(props: BookingTableProps)
{
   const bookingList = useSelector((state:RootStateType) => state.booking.bookingList)

   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={bookingList ?? []}
            slots={{toolbar: GridToolbar}}
         />
      </Box>
   )
}

const cfg = {

   table: {
      sx: {
         border: "none",
         height: "100%"
      }
   }
}

const columns: GridColDef[] = [
   {field: 'numberPlateVehicle', headerName: 'Number plate Vehicle', flex: 0.5},
   {field: 'timeSlotStart', headerName: 'TimeSlot Start', flex: 0.5},
   {field: 'timeSlotEnd', headerName: 'TimeSlot End', flex: 0.5},
   {field: 'nameParkingSlot', headerName: 'Name ParkingSlot', flex: 0.5},
   {field: 'typeVehicle', headerName: 'Type Vehicle', flex: 0.5, renderCell: (params: GridRenderCellParams) => <TypeVehicle type={params.value}/>},
   {field: 'status', headerName: 'Status', flex: 0.5, renderCell: (params: GridRenderCellParams) => <BookingStatus status={params.value}/>}
]





export default BookingTable