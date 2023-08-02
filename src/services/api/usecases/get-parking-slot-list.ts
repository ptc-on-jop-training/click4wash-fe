import ParkingSlotResponse from "../dtos/parking-slot-response.ts"
import { Response, StatusCode } from "../../common"
import axios from "axios"

function GetParkingSlotList(): Promise<Response<ParkingSlotResponse[]>> {
   const endpoint = "https://64c8cf91a1fe0128fbd6428d.mockapi.io/packing-slots"
   const url = new URL(endpoint)
   url.searchParams.append("sortBy", "locationName")

   return new Promise((resolve) => {
      axios.get<ParkingSlotResponse[]>(url.toString()).then((response) => {
         resolve({
            code: StatusCode.Ok,
            payload: response.data,
         })
      })
   })
}

export default GetParkingSlotList
