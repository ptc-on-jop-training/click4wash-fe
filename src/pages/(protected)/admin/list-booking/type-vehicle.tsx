import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {VehicleType} from "../../../../services/api"

interface TypeVehicleProps {
   type: VehicleType
   size?: "small" | "medium"
}

function TypeVehicle(props: TypeVehicleProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   useEffect(() => {
      switch (props.type) {
      case VehicleType.motorcycle:
         setState({color: "primary", label: "motorcycle"})
         break
      case VehicleType.car:
         setState({color: "secondary", label: "car"})
         break
      }
   }, [props.type])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}


export default TypeVehicle