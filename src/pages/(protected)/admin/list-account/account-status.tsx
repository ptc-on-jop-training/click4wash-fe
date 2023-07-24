import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import { AccountStatus as AccountStatusEnum } from "../../../../services/auth0/consts/account-status"


interface AccountStatusProps {
    status: AccountStatusEnum
    size?: "small" | "medium"
}


function AccountStatus(props: AccountStatusProps) {
   const [state, setState] = useState<{ color: 'default' | 'primary' | 'secondary' | 'success' | 'error' | undefined, label: string }>()
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