import AddressResponse from "./address-response.ts"

interface PackingSlotResponse {
   id: string
   locationName: string
   address: AddressResponse
   name: string
}

export default PackingSlotResponse