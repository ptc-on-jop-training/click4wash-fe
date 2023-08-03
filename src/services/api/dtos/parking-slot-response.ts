import AddressResponse from "./address-response.ts"

interface ParkingSlotResponse {
   id: string
   locationName: string
   address: AddressResponse
   name: string
}

export default ParkingSlotResponse