import {TableToolbar} from "../../../../components"
import {Button} from "@mui/material"
import {AddBox} from "@mui/icons-material"
import {useState} from "react"
import FormCreateGeneralCondition from "./form-create-general-condition.tsx"
import {useTranslation} from "react-i18next"

function GeneralConditionsToolbar() {
   const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false)
   const [t] = useTranslation('trans')

   const handleClose = () => {
      setIsCreateFormOpen(false)
   }

   return (
      <TableToolbar leftTool={
         <>
            <Button
               onClick={() => setIsCreateFormOpen(true)}
               size={"small"}
               variant="contained"
               startIcon={<AddBox sx={{color: "white"}}/>}
            >{t("admin.GeneralConditionTable.GeneralConditionToolbar.newGeneralCondition")}</Button>
            <FormCreateGeneralCondition handleClose={handleClose} isOpen={isCreateFormOpen}/>
         </>
      }/>
   )
}

export default GeneralConditionsToolbar