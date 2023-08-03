import AdminLayout from "../_layout.tsx"
import GeneralConditionsTable from "./general-conditions-table.tsx"

function GeneralConditionPage() {
   return (
      <AdminLayout
         main={<GeneralConditionsTable {...cfn.locationTable} />}
      />
   )
}

const cfn = {
   locationTable: {
      sx: {
         height: "100%",
         maxHeight: "calc(100vh - 129px)",
      }
   }
}

export default GeneralConditionPage