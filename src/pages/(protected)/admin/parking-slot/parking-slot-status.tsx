import {useEffect, useState} from "react"
import {Chip} from "@mui/material"
import {useTranslation} from "react-i18next"

interface ParkingSlotStatusProps {
    isBusy: boolean
}

function ParkingSlotStatus(props: ParkingSlotStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   const [t] = useTranslation('trans')

   useEffect(() => {
      switch (props.isBusy) {
      case true:
         setState({color: "error", label: t("admin.ParkingSlot.Status.busy")})
         break
      case false:
         setState({color: "success", label: t("admin.ParkingSlot.Status.available")})
         break
      }
   }, [props.isBusy,t])

   return <Chip color={state?.color} size={"medium"} variant={"filled"} label={state?.label}/>
}

export default ParkingSlotStatus