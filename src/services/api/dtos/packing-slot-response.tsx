import User from "../entities/user.ts"

interface PackingSlotResponse
{
   location?: Location
   teamMember?: User
   email: string
   packingName:string
   packingNumber:string
}

export default PackingSlotResponse