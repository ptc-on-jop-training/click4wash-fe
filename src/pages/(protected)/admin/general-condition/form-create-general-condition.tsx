import * as Yup from "yup"
import {useFormik} from "formik"
import {ChangeEvent} from "react"
import {DialogTitle, Dialog, DialogActions, Button, DialogContent, TextField, SelectChangeEvent} from "@mui/material"
import {useDispatch} from "react-redux"
import {pushToAllGeneralCondition} from "../../../../stores/general-condition-store.ts"
import {useTranslation} from "react-i18next"
interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
}

function CreateNewForm(props: CreateNewFormProps) {

   const dispatch = useDispatch()
   const [t] = useTranslation('trans')

   const formValidation = Yup.object().shape({
      generalCondition: Yup.string().required('This field is required'),
   })

   const form = useFormik({
      initialValues: {
         generalCondition:""
      },

      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: values => {
         const id = Math.random().toString(36)
         const newValues = {
            ...values,
            id: id,
         }
         dispatch(pushToAllGeneralCondition(newValues))
         form.resetForm()
         props.handleClose()
      }
   })

   const { values, touched, errors, handleSubmit, handleBlur } = form

   const handleInputChange = (e: ChangeEvent<any> | SelectChangeEvent) => {
      form.setFieldError(e.target.name, "")
      form.handleChange(e)
   }

   return (
      <Dialog maxWidth={"md"} fullWidth open={props.isOpen} onClose={props.handleClose}>
         <DialogTitle {...cfn.formTitle}>
            {t("admin.GeneralConditionTable.createNewGeneraCondition.title")}
         </DialogTitle>
         <DialogContent>
            <TextField
               error={!!(touched.generalCondition && errors.generalCondition)}
               helperText={touched.generalCondition && errors.generalCondition} value={values.generalCondition}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"generalCondition"} multiline={true} minRows={10} maxRows={15}
               margin={"normal"} label= {t("admin.GeneralConditionTable.createNewGeneraCondition.lableInput")} type={"text"}/>
         </DialogContent>
         <DialogActions>
            <Button onClick={props.handleClose} color="secondary">
               {t("admin.AccountTable.createNew.cancel")}
            </Button>
            <Button onClick={() => handleSubmit()} variant="contained" sx={{py: '12px', px: '16px'}}>
               {t("admin.AccountTable.createNew.submit")}
            </Button>
         </DialogActions>
      </Dialog>
   )
}

const cfn ={
   formTitle:{
      color:"primary"as const,
      sx:{
         textAlign: "center",
         fontWeight: "bold",fontSize:'30px'
      }
   }
}

export default CreateNewForm