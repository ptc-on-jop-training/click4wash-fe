import {AccountStatusEnum,Role} from "../index.ts"
export default interface AccountResponse
{
    id: string
    username: string
    email: string
    role: Role
    status: AccountStatusEnum
}

