import LocationResponse from "../dtos/location-response.ts"
import {Response, StatusCode} from "../../common"
import axios from "axios"

function GetLocationList(): Promise<Response<LocationResponse[]>> {

   const endpoint = "https://64c0c5670d8e251fd112890b.mockapi.io/locations"

   return new Promise((resolve) => {
      axios.get<LocationResponse[]>(endpoint)
         .then((response) => {
            resolve({
               code: StatusCode.Ok,
               payload: response.data,
            })
         })
   })
}


export default GetLocationList