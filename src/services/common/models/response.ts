import StatusCode from "../consts/status-code.ts"

interface Response<T>
{
   code: StatusCode
   errors?: unknown
   payload?: T
}

export default Response