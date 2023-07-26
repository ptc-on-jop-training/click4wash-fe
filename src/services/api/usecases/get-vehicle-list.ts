import {Response, StatusCode} from "../../common"
import VehicleResponse from "../dtos/vehicle-response.ts"
import axios from "axios"

async function GetVehicleList(): Promise<Response<VehicleResponse[]>>
{
   const p = "https://64a7db37dca581464b84e678.mockapi.io/api/vehicles/?orderby=createdAt&order=desc"

   return new Promise(async (resolve) => {
      const res = await axios.get<VehicleResponse[]>(p)
      resolve({
         code: StatusCode.Ok,
         payload: res.data
      })
   })
}

export default GetVehicleList