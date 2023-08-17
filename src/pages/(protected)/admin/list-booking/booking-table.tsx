import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid'
import { Box, SxProps } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../stores'
import BookingStatus from './booking-status.tsx'
import TypeVehicle from './type-vehicle.tsx'
import {FormatTimeSlot, TimeSlots} from "../../../../services/api"
import {useTranslation} from "react-i18next"



interface BookingTableProps {
   sx?: SxProps
}

function BookingTable(props: BookingTableProps) {
   const bookingList = useSelector((state: RootStateType) => state.booking.bookingList)
   const [t] = useTranslation('trans')

   const columns: GridColDef[] = [
      {field: 'vehicleNumberPlate', headerName: t("admin.BookingTable.numberPlate"), flex: 0.5},
      {field: 'createdAt', headerName: t("admin.BookingTable.day"), flex:0.5},
      {field: 'timeSlot', headerName: t("admin.BookingTable.timeSlot"), flex:0.5, renderCell:(params) => FormatTimeSlot(TimeSlots[params.value as keyof typeof TimeSlots])},
      {field: 'parkingSlotName', headerName: t("admin.BookingTable.parkingSlot"), flex: 0.5},
      {field: 'vehicleType', headerName: t("admin.BookingTable.Type.type"), flex: 0.5, renderCell: (params: GridRenderCellParams) => <TypeVehicle type={params.value} />},
      {field: 'status', headerName: t("admin.BookingTable.Status.status"), flex: 0.5, renderCell: (params: GridRenderCellParams) => <BookingStatus status={params.value} />}
   ]

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


export default BookingTable
