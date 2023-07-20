import Status from "../consts/status.ts"
interface AccountResponse
{
    id?:string
    username?:string
    email?:string
    role?: string
    status?:Status
}
export default AccountResponse