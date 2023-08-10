import AddressResponse from "./address-response.ts"

interface ParkingSlotResponse
{
    id: string
    locationId: string
    address: AddressResponse
    name: string
}

export default ParkingSlotResponse