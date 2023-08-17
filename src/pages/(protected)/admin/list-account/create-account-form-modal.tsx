import { ChangeEvent} from "react"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText, MenuItem, Select, TextField,} from "@mui/material"
import * as Yup from "yup"
import {CreateTeamMemberAccountRequest, Role} from "../../../../services/auth0"
import { useFormik } from "formik"
import CreateTeamMemberAccount from "../../../../services/auth0/usecases/create-team-member-account.ts"
import {useDispatch} from "react-redux"
import {pushToAllAccountList} from "../../../../stores"
import {RoleChip} from "../../../../components"
import {useTranslation} from "react-i18next"


interface CreateAccountFormModalProps {
   isOpen: boolean;
   handleClose: () => void;
}

const formValidation = Yup.object().shape({
   email: Yup.string().email("Invalid email address").required("Email is required"),
   username: Yup.string().required("Display username is required"),
})
function CreateAccountFormModal(props: CreateAccountFormModalProps) {
   const [t] = useTranslation('trans')


   const dispatch = useDispatch()
   const form = useFormik<CreateTeamMemberAccountRequest>({
      initialValues: {
         email: "",
         username: "",
      },
      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {

         CreateTeamMemberAccount(values).then((res) => {
            dispatch(pushToAllAccountList(res.payload!))
         })

         form.resetForm()
         props.handleClose()
      },
   })

   const handleInputChange = (e: ChangeEvent<any>) => {
      form.setFieldError(e.target.name, "")
      form.handleChange(e)
   }
   const handleCancel = () =>{
      form.resetForm()
      props.handleClose()
   }


   return (
      <Dialog open={props.isOpen} onClose={props.handleClose}>
         <DialogTitle>{t("admin.AccountTable.createNew.title")}</DialogTitle>
         <DialogContent>
            <Select
               name={"role"}
               value={Role.teamMember}
               label={t("admin.AccountTable.createNew.role")}
               required
               fullWidth
               margin={"dense"}
               disabled
            >
               <MenuItem value={Role.teamMember}>
                  <RoleChip role={Role.teamMember} />
               </MenuItem>
            </Select>
            <FormHelperText>{t("admin.AccountTable.createNew.helperText")}</FormHelperText>
            <TextField
               error={!!(form.touched.username && form.errors.username)}
               helperText={form.touched.username && form.errors.username}
               value={form.values.username}
               onBlur={form.handleBlur}
               onChange={handleInputChange}
               fullWidth
               required
               name={"username"}
               margin={"normal"}
               label={t("admin.AccountTable.createNew.username")}
               type={"text"}
            />
            <TextField
               error={!!(form.touched.email && form.errors.email)}
               helperText={form.touched.email && form.errors.email}
               value={form.values.email}
               onBlur={form.handleBlur}
               onChange={handleInputChange}
               fullWidth
               required
               name={"email"}
               margin={"normal"}
               label={t("admin.AccountTable.createNew.email")}
               type={"email"}
            />
         </DialogContent>
         <DialogActions>
            <Button onClick={handleCancel} color="secondary">
               {t("admin.AccountTable.createNew.cancel")}
            </Button>
            <Button onClick={() => form.handleSubmit()} variant="contained" color="primary" disabled={form.isSubmitting}>
               {t("admin.AccountTable.createNew.submit")}
            </Button>
         </DialogActions>
      </Dialog>
   )
}


export default CreateAccountFormModal