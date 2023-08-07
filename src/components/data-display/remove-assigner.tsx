import {Chip} from "@mui/material"

interface RemoveAssignerProps {
    label?: string,
    size?: "small" | "medium",
    onDelete?: () => void,
    onClick?:() => void,
}

function RemoveAssigner(props: RemoveAssignerProps) {
   return <Chip size={props.size ?? "medium"} variant={"filled"} color={"default"}
      label={props.label} onDelete={props.onDelete}/>
}

export default RemoveAssigner