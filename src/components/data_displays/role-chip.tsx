import {Chip, Typography} from "@mui/material"

interface RoleChipProps {
   size?: "small" | "medium",
   label:string
}

function RoleChip(props: RoleChipProps) {
   return (
      <Chip size={props.size ?? "medium"} variant={"filled"} color={"secondary"} label={<Typography className={"text-white"}>{props.label}</Typography>}/>
   )
}

export default RoleChip