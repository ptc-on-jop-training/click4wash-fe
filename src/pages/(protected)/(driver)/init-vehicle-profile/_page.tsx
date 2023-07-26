import {CreateVehicleProfileFormModal} from "../../../../components"
import {useNavigate} from "react-router-dom"

function InitVehicleProfilePage()
{
   const nav = useNavigate()

   const handleSkipInitVehicle = () => {
      nav("/", {replace: true})
   }

   return (
      <CreateVehicleProfileFormModal variant={"init"} isOpen={true} handleClose={handleSkipInitVehicle}/>
   )
}

export default InitVehicleProfilePage