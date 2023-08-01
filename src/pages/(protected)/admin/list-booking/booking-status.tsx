import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {BookingStatusEnum} from "../../../../services/api"

interface BookingStatusProps {
   status: BookingStatusEnum
   size?: "small" | "medium"
}

function BookingStatus(props: BookingStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   useEffect(() => {
      switch (props.status) {
      case BookingStatusEnum.processing:
         setState({color: "success", label: "processing"})
         break
      }
   }, [props.status])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}


export default BookingStatus