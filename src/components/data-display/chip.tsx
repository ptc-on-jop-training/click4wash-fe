import {Chip as ChipComponent} from "@mui/material"

interface ChipProps {
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning",
    label?: string,
    size?: "small" | "medium",
    onDelete?: () => void,
    onClick?:() => void,
}

function Chip(props: ChipProps) {
   return <ChipComponent size={props.size ?? "medium"} variant={"filled"} color={props.color ?? "default"}
      label={props.label} onDelete={props.onDelete}/>
}

export default Chip