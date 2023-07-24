import User from "../entities/user.ts"

interface PackingSlotResponse
{
   location?: Location
   teamMember?: User

   packingName:string
   packingPhoneNumber:string

}

export default PackingSlotResponse