import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {BookingStatus as BookingStatusEnum} from "../../../../services/api"
import {useTranslation} from "react-i18next"

interface BookingStatusProps {
   status: BookingStatusEnum
   size?: "small" | "medium"
}


function BookingStatus(props: BookingStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   const [t] = useTranslation('trans')

   useEffect(() => {
      switch (props.status) {
      case BookingStatusEnum.processing:
         setState({color: "error", label: t("admin.BookingTable.Status.processing")})
         break
      case BookingStatusEnum.accepted:
         setState({color: "secondary", label: t("admin.BookingTable.Status.accepted")})
         break
      case BookingStatusEnum.refused:
         setState({color: "default", label: t("admin.BookingTable.Status.refused")})
         break
      case BookingStatusEnum.done:
         setState({color: "success", label: t("admin.BookingTable.Status.done")})
         break
      }
   }, [props.status,t])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}




export default BookingStatus