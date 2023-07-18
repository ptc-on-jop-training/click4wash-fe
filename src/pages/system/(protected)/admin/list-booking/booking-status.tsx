import {Chip} from "@mui/material"
import {useEffect, useState} from "react"

interface BookingStatusProps
{
    status: "requested" | "accepted" | "done"
    size?: "small" | "medium"
}

type BookingStatusColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'

function BookingStatus(props:BookingStatusProps)
{
   const [state, setState] = useState<{color: BookingStatusColor, label: string}>()

   useEffect(()=>{
      if(props.status == "requested"){
         setState({color:"warning", label:"requested"})
      }
      else if (props.status == "accepted") {
         setState({color:"info", label:"accepted"})
      }
      else {
         setState({color:"success", label:"done"})
      }
   }, [])

   return <Chip color={state?.color} size={props.size} variant={"filled"} label={state?.label}/>
}
export default BookingStatus