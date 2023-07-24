import Role from "../../../../../services/auth0/consts/role.ts"
import {
   AccountStatus,
   AccountStatus as AccountStatusEnum
} from "../../../../../services/auth0/consts/account-status.ts"

export const accountsData = [
   {
      id: "1",
      username: "John Doe",
      email: "john.doe@example.com",
      role: Role.teamMember,
      status: AccountStatusEnum.active
   },
   {
      id: "2",
      username: "Jane Smith",
      email: "jane.smith@example.com",
      role: Role.driver,
      status:  AccountStatusEnum.active
   },
   {
      id: "3",
      username: "Michael Johnson",
      email: "michael.johnson@example.com",
      role: Role.driver,
      status:  AccountStatusEnum.active
   },
   {
      id: "4",
      username: "Emily Davis",
      email: "emily.davis@example.com",
      role: Role.driver,
      status: AccountStatus.suspend
   },
   {
      id: "5",
      username: "David Wilson",
      email: "david.wilson@example.com",
      role: Role.teamMember,
      status: AccountStatus.suspend
   }
]
