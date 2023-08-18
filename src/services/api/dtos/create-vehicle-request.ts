import VehicleType from "../consts/vehicle-type.ts"

interface CreateVehicleRequest
{
   numberPlate: string
   color: string | null
   model: string
   type: VehicleType | null
}

export default CreateVehicleRequest