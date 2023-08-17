import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {Role} from "../../services/auth0"
import {useTranslation} from "react-i18next"
interface RoleChipProps {
   role: string
   size?: "small" | "medium"
}

function RoleChip(props: RoleChipProps) {
   const [state, setState] = useState<{ color: any, label: string }>()
   const [t] = useTranslation('trans')
   useEffect(() => {
      handleRole()
   }, [props.role,t])

   const handleRole = () => {
      switch (props.role) {
      case Role.admin:
         setState({color: "secondary", label: t("admin.AccountTable.Role.admin")})
         break
      case Role.driver:
         setState({color: "warning", label: t("admin.AccountTable.Role.driver")})
         break
      case Role.teamMember:
         setState({color: "success", label: t("admin.AccountTable.Role.teamMember")})
         break
      }
   }

   return <Chip size={props.size ?? "medium"} variant={"filled"} color={state?.color} label={state?.label}/>
}


export default RoleChip