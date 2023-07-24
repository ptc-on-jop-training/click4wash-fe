import User from "../entities/user.ts"

interface PackingSlotResponse
{
   location?: Location
   teamMember?: User

   packingName:string
   packingNumber:string

}

export default PackingSlotResponse