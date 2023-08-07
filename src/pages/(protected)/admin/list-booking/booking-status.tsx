import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {BookingStatus as BookingStatusEnum} from "../../../../services/api"

interface BookingStatusProps {
   status: BookingStatusEnum
   size?: "small" | "medium"
}


function BookingStatus(props: BookingStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   useEffect(() => {
      switch (props.status) {
      case BookingStatusEnum.processing:
         setState({color: "error", label: "processing"})
         break
      case BookingStatusEnum.accepted:
         setState({color: "secondary", label: "accepted"})
         break
      case BookingStatusEnum.refused:
         setState({color: "default", label: "refused"})
         break
      case BookingStatusEnum.done:
         setState({color: "success", label: "done"})
         break
      }
   }, [props.status])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}




export default BookingStatus