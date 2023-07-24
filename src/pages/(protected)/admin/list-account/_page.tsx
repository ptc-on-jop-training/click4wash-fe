import {Box} from "@mui/material"
import {accountsData} from "./list-data-account/list-data-account.tsx"
import AccountTable from "./account-table.tsx"

function AccountPage() {
   return (
      <Box>
         <AccountTable accountList={accountsData} {...cfn.accountTable}/>
      </Box>
   )
}

const cfn = {
   accountTable:{
      sx:{
         height: 772
      }
   }
}
export default AccountPage