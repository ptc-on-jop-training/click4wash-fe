import VehicleType from "../consts/vehicle-type.ts"

interface VehicleResponse
{
   id: string
   numberPlate: string
   color: string
   model: string
   type: VehicleType

   driverId: string
}

export default VehicleResponse