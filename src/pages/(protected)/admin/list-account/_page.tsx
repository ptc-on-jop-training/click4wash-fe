import {accountsData} from "./list-data-account/list-data-account.tsx"
import AccountTable from "./account-table.tsx"

function AccountPage() {


   return (
      <AccountTable accountList={accountsData} {...cfn.accountTable}/>
   )
}

const cfn = {
   accountTable:{
      sx:{
         height: "100%",
         maxHeight: "calc(100vh - 129px)",
      }
   }
}

export default AccountPage