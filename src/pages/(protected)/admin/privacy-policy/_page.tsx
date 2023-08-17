import AdminLayout from "../_layout.tsx"
import PolicyTable from "./policy-table.tsx"


function PrivacyPolicyPage() {
   return (
      <AdminLayout
         main={<PolicyTable {...cfn.policyTable}/>}
      />
   )
}

const cfn = {
   policyTable:{
      sx:{
         height: "100vh",
         maxHeight: "calc(100vh - 130px)",
      }
   }
}

export default PrivacyPolicyPage