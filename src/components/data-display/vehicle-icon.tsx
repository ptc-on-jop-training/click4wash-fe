import {TwoWheeler, TimeToLeave} from "@mui/icons-material"
import {VehicleType} from "../../services/api"

interface VehicleIconProps
{
   type: VehicleType
}

function VehicleIcon(props: VehicleIconProps)
{
   if (props.type === VehicleType.car) {
      return <TimeToLeave {...cfn.icon}/>
   } else if (props.type === VehicleType.motorcycle) {
      return <TwoWheeler {...cfn.icon}/>
   }
}

const cfn = {
   icon: {
      sx: {
         width: "60px",
         height: "60px",
      }
   }
}

export default VehicleIcon