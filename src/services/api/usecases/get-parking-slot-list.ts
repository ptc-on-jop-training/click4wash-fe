import ParkingSlotResponse from "../dtos/parking-slot-response.ts"
import { Response, StatusCode } from "../../common"
import axios from "axios"

function GetParkingSlotList(): Promise<Response<ParkingSlotResponse[]>> {
   const endpoint = "https://64c0c5670d8e251fd112890b.mockapi.io/packing-slots"
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
