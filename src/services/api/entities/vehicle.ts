import VehicleModels from "../consts/vehicle-models.ts"
import BaseEntity from "./base-entity.ts"
import User from "./user.ts"

interface Vehicle extends BaseEntity
{
   driverId: string
   color: string
   model: VehicleModels

   driver?: User
}

export default Vehicle