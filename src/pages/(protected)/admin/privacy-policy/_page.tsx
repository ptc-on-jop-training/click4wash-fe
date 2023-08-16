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
         height: "100%",
         maxHeight: "calc(100vh - 129px)",
      }
   }
}

export default PrivacyPolicyPage