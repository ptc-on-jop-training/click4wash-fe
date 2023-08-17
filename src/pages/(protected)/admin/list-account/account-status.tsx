import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {AccountStatusEnum} from "../../../../services/auth0"
import {useTranslation} from "react-i18next"
interface AccountStatusProps {
    status: AccountStatusEnum
    size?: "small" | "medium"
}

function AccountStatus(props: AccountStatusProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   const [t] = useTranslation('trans')

   useEffect(() => {
      switch (props.status) {
      case AccountStatusEnum.active:
         setState({color: "success", label: t("admin.AccountTable.Status.active")})
         break
      case AccountStatusEnum.suspend:
         setState({color: "default", label: t("admin.AccountTable.Status.suspend")})
         break
      }
   }, [props.status,t])


   return <Chip color={state?.color} size={props.size ?? "medium"} variant={"filled"} label={state?.label}/>
}


export default AccountStatus