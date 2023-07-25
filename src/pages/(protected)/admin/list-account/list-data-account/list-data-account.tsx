import {Role, AccountStatusEnum, AccountResponse} from "../../../../../services/auth0"

export const accountsData: AccountResponse[] = [
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
      status: AccountStatusEnum.suspend
   },
   {
      id: "5",
      username: "David Wilson",
      email: "david.wilson@example.com",
      role: Role.teamMember,
      status: AccountStatusEnum.suspend
   }
]
