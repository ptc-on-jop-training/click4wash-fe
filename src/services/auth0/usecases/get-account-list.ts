import AccountResponse from "../dtos/account-response.ts"
import { Response, StatusCode } from "../../common"
import axios from "axios"

function GetAccountList(): Promise<Response<AccountResponse[]>> {
   const endpoint = "https://61bc10bcd8542f001782451a.mockapi.io/accounts/?orderby=id&order=desc"

   return new Promise((resolve) => {
      axios.get<AccountResponse[]>(endpoint)
         .then((response) => {
            resolve({
               code: StatusCode.Ok,
               payload: response.data,
            })
         })
   })
}


export default GetAccountList