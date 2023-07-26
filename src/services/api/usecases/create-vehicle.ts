import CreateVehicleRequest from "../dtos/create-vehicle-request.ts"
import VehicleResponse from "../dtos/vehicle-response.ts"
import {Response, StatusCode} from "../../common"
import axios from "axios"

function CreateVehicle(request: CreateVehicleRequest): Promise<Response<VehicleResponse>>
{
   const p = "https://64a7db37dca581464b84e678.mockapi.io/api/vehicles"

   return new Promise(async (resolve) => {
      const res = await axios.post<VehicleResponse>(p, request)
      resolve({
         code: StatusCode.Created,
         payload: res.data
      })
   })
}

export default CreateVehicle