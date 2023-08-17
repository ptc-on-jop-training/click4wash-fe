import AccountTable from "./account-table.tsx"
import AdminLayout from "../_layout.tsx"

function AccountPage()
{
   return (
      <AdminLayout
         main={<AccountTable  {...cfn.accountTable}/>}
      />
   )
}

const cfn = {
   accountTable:{
      sx:{
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
      }
   }
}

export default AccountPage