import BaseEntity from "./base-entity.ts"

interface User extends BaseEntity
{
   authId: string
}

export default User