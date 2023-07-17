import {Chip} from "@mui/material"
import {useEffect, useState} from "react"

interface AccountStatusProps
{
    isActive: boolean
    size?: "small" | "medium"
}

function AccountStatus(props: AccountStatusProps)
{
   const [state, setState] = useState<{color: any, label: string}>()

   useEffect(() => {
      if (props.isActive) {
         setState({color: "success", label: "active"})
      } else {
         setState({color: "default", label: "suspend "})
      }
   }, [props.isActive])

   return <Chip color={state?.color} size={props.size} variant={"filled"} label={state?.label}/>
}

export default AccountStatus