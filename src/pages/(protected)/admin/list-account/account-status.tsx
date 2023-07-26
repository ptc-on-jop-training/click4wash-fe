import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {AccountStatusEnum} from "../../../../services/auth0"

interface AccountStatusProps {
    status: AccountStatusEnum
    size?: "small" | "medium"
}

function AccountStatus(props: AccountStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   useEffect(() => {
      switch (props.status) {
      case AccountStatusEnum.active:
         setState({color: "success", label: "active"})
         break
      case AccountStatusEnum.suspend:
         setState({color: "default", label: "suspend"})
         break
      }
   }, [props.status])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}


export default AccountStatus