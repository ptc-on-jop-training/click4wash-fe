import VehicleType from "../consts/vehicle-type.ts"
import BaseEntity from "./base-entity.ts"
import User from "./user.ts"

interface Vehicle extends BaseEntity
{
   numberPlate: string
   driverId: string
   color: string
   model: string
   type: VehicleType

   driver?: User
}

export default Vehicle