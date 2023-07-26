import BaseEntity from "./base-entity.ts"

interface Address extends BaseEntity
{
   line1: string
   line2: string
   line3: string
   line4?: string

   locationId: string

   location?: Location
}

export default Address