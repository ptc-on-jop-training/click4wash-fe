import PackingSlotResponse from "../dtos/packing-slot-response.tsx"
import {Response, StatusCode} from "../../common"
import axios from "axios"

function GetPackingSlotList(): Promise<Response<PackingSlotResponse[]>> {

   const endpoint = "https://64c0c5670d8e251fd112890b.mockapi.io/packing-slots"

   return new Promise((resolve) => {
      axios.get<PackingSlotResponse[]>(endpoint)
         .then((response) => {
            resolve({
               code: StatusCode.Ok,
               payload: response.data,
            })
         })
   })
}


export default GetPackingSlotList