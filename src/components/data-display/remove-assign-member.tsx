import {Chip} from "@mui/material"

interface RemoveAssignMemberProps {
    label?: string,
    size?: "small" | "medium",
    onDelete?: () => void,
    onClick?:() => void,
}

function RemoveAssignMember(props: RemoveAssignMemberProps) {
   return <Chip size={props.size ?? "medium"} variant={"filled"} color={"default"}
      label={props.label} onDelete={props.onDelete}/>
}

export default RemoveAssignMember