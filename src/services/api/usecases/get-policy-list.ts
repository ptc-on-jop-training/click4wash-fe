import {Response, StatusCode} from "../../common"
import {PolicyResponse} from "../index.ts"
import axios from "axios"

async function GetPolicyList(): Promise<Response<PolicyResponse[]>>
{
   const p = "https://61d5b5d72b4f730017a829e7.mockapi.io/policy"

   return new Promise(async (resolve) => {
      const res = await axios.get<PolicyResponse[]>(p)
      resolve({
         code: StatusCode.Ok,
         payload: res.data
      })
   })
}

export default GetPolicyList