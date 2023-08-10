import {useEffect, useState} from "react"
import {Chip} from "@mui/material"

interface ParkingSlotStatusProps {
    isBusy: boolean
}

function ParkingSlotStatus(props: ParkingSlotStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()

   useEffect(() => {
      switch (props.isBusy) {
      case true:
         setState({color: "error", label: "busy"})
         break
      case false:
         setState({color: "success", label: "available"})
         break
      }
   }, [props.isBusy])

   return <Chip color={state?.color} size={"medium"} variant={"filled"} label={state?.label}/>
}

export default ParkingSlotStatus