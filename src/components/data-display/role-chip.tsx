import {Chip, Typography} from "@mui/material"
import {useEffect, useState} from "react"
import Role from "../../services/auth0/consts/role.ts";

interface RoleChipProps {
    role: string
    size?: "small" | "medium"
}

function RoleChip(props: RoleChipProps) {
   const [state, setState] = useState<{ color: any, label: string }>()

   useEffect(() => {
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
   }, [props.role])

   return <Chip  size={props.size ?? "medium"} variant={"filled"} color={state?.color} label={<Typography className={"text-white"}>{state?.label}</Typography>}/>
}

export default RoleChip