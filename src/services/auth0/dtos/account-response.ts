import {AccountStatus as AccountStatusEnum} from "../consts/account-status.ts";
import Role from "../consts/role.ts"

interface AccountResponse
{
    id: string
    username: string
    email: string
    role: Role
    status: AccountStatusEnum
}

export default AccountResponse