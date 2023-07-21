import AccountStatus from "../consts/account-status.ts"
import Role from "../consts/role.ts"

interface AccountResponse
{
    id: string
    username: string
    email: string
    role: Role
    status: AccountStatus
}

export default AccountResponse