import {Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions} from "@mui/material"
import React, {useEffect, useState} from "react"
import {replacePolicyByNew, useRootDispatch} from "../../../../stores"
import {PolicyResponse} from "../../../../services/api"
import {useTranslation} from "react-i18next"
interface FormUpdatePolicyProps
{
   open: boolean;
   onClose: () => void
   title: string,
   id:string

}

function FormUpdatePolicy(props: FormUpdatePolicyProps) {
   const dispatch = useRootDispatch()
   const [updatedTitle, setUpdatedTitle] = useState(props.title)
   const [t] = useTranslation('trans')

   useEffect(() => {
      setUpdatedTitle(props.title)
   }, [props.title])

   const handleUpdateTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(e.target.value)
   }
   const handleUpdate =  () => {
      const updatedPolicy: PolicyResponse = {
         id: props.id,
         title: updatedTitle,
      }
      dispatch(replacePolicyByNew(updatedPolicy))
      props.onClose()
   }
   const handleCancle = () => {
      setUpdatedTitle(props.title)
      props.onClose()
   }
   return (
      <Dialog open={props.open} onClose={props.onClose} fullWidth>
         <DialogTitle>{t("admin.PrivacyPolicy.updatePrivacyPolicy.title")}</DialogTitle>
         <DialogContent >
            <TextField
               label={t("admin.PrivacyPolicy.updatePrivacyPolicy.lableInput")}
               variant="outlined"
               fullWidth required name={"private Policy"} multiline={true} minRows={20} maxRows={30}
               value={updatedTitle}
               onChange={handleUpdateTitleChange}
               margin={"dense"}
            />
         </DialogContent>
         <DialogActions>
            <Button onClick={handleCancle} color="primary" variant="contained">
               {t("admin.AccountTable.createNew.cancel")}
            </Button>
            <Button onClick={handleUpdate} color="error" variant="contained">
               {t("admin.AccountTable.createNew.submit")}
            </Button>
         </DialogActions>
      </Dialog>
   )
}

export default FormUpdatePolicy
