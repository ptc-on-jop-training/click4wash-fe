import {Response, StatusCode} from "../../common"
import VehicleResponse from "../dtos/vehicle-response.ts"
import MyAxios from "../my-axios.ts"

async function GetVehicleList(): Promise<Response<VehicleResponse[]>>
{
   return new Promise(async (resolve) => {
      const res = await MyAxios.get("")
      resolve({
         code: StatusCode.Ok,
         payload: res.data
      })
   })
}

export default GetVehicleList