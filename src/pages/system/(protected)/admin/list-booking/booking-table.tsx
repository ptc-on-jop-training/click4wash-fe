import {DataGrid} from '@mui/x-data-grid'
import {GridColDef} from "@mui/x-data-grid-premium"
import { useEffect, useState} from "react"
import {GridRenderCellParams} from "@mui/x-data-grid-pro"
import BookingStatus from "./booking-status.tsx"
import {TableToolBar} from "../../../../../components"

export interface BookingRes {
    id:string
    date: Date
    chargeBattery: boolean
    location: {
        address: string
        parkingSlot: string
        timeslot: number
    };
    driver: {
        fullName: string
        phoneNumber: string
        email: string
        vehicleInfo: string
    };
    teamMember: {
        fullName: string
        phoneNumber: string
        email: string;
    };
    status: string
    comment?: string
    rating?: number
    feedback?: string
}




interface BookingTableProps
{
    bookingList?: BookingRes[]
}


function BookingTable(props:BookingTableProps) {
   const [rows,setRows] = useState<any>([])


   useEffect(() =>{
      setRows( props.bookingList?.map((booking)=> {
         return{ id:booking.id, theDate:booking.date,timeslot:booking.location.timeslot,status:booking.status,teamMemberName:booking.teamMember.fullName
         }
      }))
   },
   [props.bookingList]
   )

   return (
      <DataGrid
         columns={columns}
         rows={rows}
         slots={{
            toolbar: TableToolBar,
         }}
      />


   )
}


const columns: GridColDef[] = [
   {field: 'id', headerName: 'Id', flex: 0.1, headerClassName: 'bold-header', align:"center", headerAlign:"center"},
   {field: 'teamMemberName', headerName: 'Team Member Name', flex: 0.15},
   {field: 'timeslot', headerName: 'Timeslot', flex: 0.1},
   {field: 'theDate', headerName: ' The Date', flex: 0.3},
   {field: 'status', headerName: 'Status', flex: 0.15,renderCell: (params: GridRenderCellParams) => <BookingStatus status={params.value ==="done" ? "done" : params.value === "requested" ? "requested" : "accepted"}/>}
]


export default BookingTable