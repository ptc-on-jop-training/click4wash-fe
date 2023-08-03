import AddressResponse from "./address-response.ts"

interface LocationResponse {
   id: string
   name: string
   address: AddressResponse
   teamMember?: []
}

export default LocationResponse