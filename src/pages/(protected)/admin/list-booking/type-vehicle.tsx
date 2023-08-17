import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {VehicleType} from "../../../../services/api"
import {useTranslation} from "react-i18next"


interface TypeVehicleProps {
   type: VehicleType
   size?: "small" | "medium"
}


function TypeVehicle(props: TypeVehicleProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   const [t] = useTranslation('trans')

   useEffect(() => {
      switch (props.type) {
      case VehicleType.motorcycle:
         setState({color: "primary", label: t("admin.BookingTable.Type.motorcycle")})
         break
      case VehicleType.car:
         setState({color: "secondary", label: t("admin.BookingTable.Type.car")})
         break
      }
   }, [props.type,t])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}




export default TypeVehicle