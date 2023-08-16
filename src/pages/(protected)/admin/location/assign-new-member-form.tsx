import * as Yup from "yup"
import {useFormik} from "formik"
import {ChangeEvent} from "react"
import {
   DialogTitle,
   Dialog,
   DialogActions,
   Button,
   DialogContent,
   TextField,
   SelectChangeEvent, Autocomplete,
} from "@mui/material"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {pushTeamMember, setSelectedLocationById} from "../../../../stores/location-stores.ts"
import {useTranslation} from "react-i18next"

interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
    teamMember?: string[]
    id: string
}

function AssignNewMemberForm(props: CreateNewFormProps) {

   const dispatch = useDispatch()

    const [t] = useTranslation('trans')

   const Users = useSelector((state: RootStateType) => state.account.accountList)

   const UserList = Users?.filter(user => user.role === 'team-member').map(user => user.email) ?? []

   const form = useFormik({
      initialValues: {
         teamMember: [],
      },
      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {
         const newValues = {
            id: props.id,
            newItem: values.teamMember || [],
         }
         dispatch(pushTeamMember(newValues))
         dispatch(setSelectedLocationById({id: props.id}))
         form.resetForm()
         props.handleClose()
      },
   })
   const {values, touched, errors, handleSubmit, handleBlur} = form
   const handleCancel = () => {
      form.resetForm()
      props.handleClose()
   }

   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>

         <DialogTitle>{t("admin.LocationTable.locationDetail.AssignNewMemberForm.title")}</DialogTitle>

         <DialogContent>

            <Autocomplete
               multiple size="medium" sx={{marginTop: 2}}
               value={values.teamMember} options={UserList} onBlur={handleBlur}
               onChange={(_e: ChangeEvent<any> | SelectChangeEvent, newValue: string[]) => {
                  form.setFieldValue('teamMember', newValue)
                  form.setFieldError('teamMember', '')
               }}
               getOptionDisabled={(option: string) => {
                  const isDisabled = !!props.teamMember && props.teamMember.includes(option)
                  return isDisabled
               }}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     required name="teamMember" label={t("admin.LocationTable.locationDetail.AssignNewMemberForm.Choose")} placeholder={t("admin.LocationTable.locationDetail.AssignNewMemberForm.Choose")}
                     error={!!(touched.teamMember && errors.teamMember)}
                     helperText={touched.teamMember && errors.teamMember}
                  />
               )}
            />

         </DialogContent>

         <DialogActions>
            <Button onClick={handleCancel} color="secondary">
                {t("admin.LocationTable.locationDetail.AssignNewMemberForm.cancel")}
            </Button>
            <Button onClick={() => handleSubmit()} variant="contained" sx={{py: '12px', px: '16px'}}>
                {t("admin.LocationTable.locationDetail.AssignNewMemberForm.submit")}
            </Button>
         </DialogActions>

      </Dialog>
   )
}

const formValidation = Yup.object().shape({
   teamMember: Yup.array().min(1, 'This field is required'),
})


export default AssignNewMemberForm
