import AccountStatus from "../consts/account-status.ts"
interface AccountResponse
{
    id?:string
    username?:string
    email?:string
    role?: string
    status?:AccountStatus
}
export default AccountResponse