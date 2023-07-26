import AccountTable from "./account-table.tsx"

function AccountPage()
{
   return (
      <AccountTable  {...cfn.accountTable}/>
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