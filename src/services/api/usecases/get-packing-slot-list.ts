import PackingSlotResponse from "../dtos/packing-slot-response.tsx"
import { Response, StatusCode } from "../../common"
import axios from "axios"

function GetPackingSlotList(): Promise<Response<PackingSlotResponse[]>> {
   const endpoint = "https://64c0c5670d8e251fd112890b.mockapi.io/packing-slots";
   const url = new URL(endpoint)
   url.searchParams.append("sortBy", "locationName")

   return new Promise((resolve) => {
      axios.get<PackingSlotResponse[]>(url.toString()).then((response) => {
         resolve({
            code: StatusCode.Ok,
            payload: response.data,
         })
      })
   })
}

export default GetPackingSlotList
