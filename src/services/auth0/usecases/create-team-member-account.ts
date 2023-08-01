import {AccountStatusEnum, CreateTeamMemberAccountRequest, Role} from "../index.ts"
import {Response, StatusCode} from "../../common"
import axios from "axios"
import AccountResponse from "../dtos/account-response.ts"

interface ExtendedCreateTeamMemberAccountRequest extends CreateTeamMemberAccountRequest {
   role: Role;
   status: AccountStatusEnum;
}
function CreateTeamMemberAccount(request: CreateTeamMemberAccountRequest): Promise<Response<AccountResponse>>
{
   const p = "https://61bc10bcd8542f001782451a.mockapi.io/accounts"

   const modifiedRequest: ExtendedCreateTeamMemberAccountRequest = {
      ...request,
      role: Role.teamMember,
      status: AccountStatusEnum.active
   }

   return new Promise(async (resolve) => {
      const res = await axios.post<AccountResponse>(p,modifiedRequest)
      resolve({
         code: StatusCode.Created,
         payload: res.data
      })
   })
}

export default CreateTeamMemberAccount