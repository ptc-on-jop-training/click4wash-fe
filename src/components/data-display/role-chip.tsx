import {Chip} from "@mui/material"
import {useEffect, useState} from "react"
import {Role} from "../../services/auth0"

interface RoleChipProps {
   role: string
   size?: "small" | "medium"
}

function RoleChip(props: RoleChipProps) {
   const [state, setState] = useState<{ color: any, label: string }>()

   useEffect(() => {
      handleRole()
   }, [props.role])

   const handleRole = () => {
      switch (props.role) {
      case Role.admin:
         setState({color: "secondary", label: "admin"})
         break
      case Role.driver:
         setState({color: "warning", label: "driver"})
         break
      case Role.teamMember:
         setState({color: "success", label: "team-member"})
         break
      }
   }

   return <Chip size={props.size ?? "medium"} variant={"filled"} color={state?.color} label={state?.label}/>
}


export default RoleChip