import axios from "axios"
import createParkingSlotRequest from "../dtos/create-parking-slot-request.ts"
import ParkingSlotResponse from "../dtos/parking-slot-response.ts"
import {StatusCode, Response} from "../../common"
import CreateParkingSlotRequest from "../dtos/create-parking-slot-request.ts"
import CreateAddressRequest from "../dtos/create-address-request.ts"

interface ExtendedCreateParkingSlotRequest extends CreateParkingSlotRequest {
   address: CreateAddressRequest
}

function CreateParkingSlot(request: createParkingSlotRequest, address: CreateAddressRequest): Promise<Response<ParkingSlotResponse>> {

   const endpoint = "https://64c8cf91a1fe0128fbd6428d.mockapi.io/packing-slots"

   const modifiedRequest: ExtendedCreateParkingSlotRequest = {
      ...request,
      locationName:request.locationName.split("-", 1)[0],
      address: address,
   }

   return new Promise(async (resolve) => {
      const res = await axios.post<ParkingSlotResponse>(endpoint, modifiedRequest)
      resolve({
         code: StatusCode.Created,
         payload: res.data
      })
   })
}

export default CreateParkingSlot