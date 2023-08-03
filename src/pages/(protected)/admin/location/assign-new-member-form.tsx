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
import {pushTeamMember, setSelectedLocationById} from "../../../../stores/location-store.ts"

interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
    teamMember?:string[]
    id:string
}

function AssignNewMemberForm(props: CreateNewFormProps) {

   const dispatch = useDispatch()

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
         dispatch(setSelectedLocationById({ id: props.id }))
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

         <DialogTitle>Create New Location</DialogTitle>

         <DialogContent>

            <Autocomplete
               multiple
               size="medium"
               value={values.teamMember}
               sx={{marginTop: 2}}
               options={UserList}
               onBlur={handleBlur}
               onChange={(e: ChangeEvent<any> | SelectChangeEvent, newValue: string[]) => {
                  form.setFieldValue('teamMember', newValue)
               }}
               renderInput={(params) => (
                  <TextField {...params} label="Choose Team member" placeholder="Choose Team member"/>
               )}
            />

         </DialogContent>

         <DialogActions>
            <Button onClick={handleCancel} color="secondary">
                    Cancel
            </Button>
            <Button onClick={() => handleSubmit()} variant="contained" sx={{py: '12px', px: '16px'}}>
                    Save
            </Button>
         </DialogActions>

      </Dialog>
   )
}

const formValidation = Yup.object().shape({
   teamMember: Yup.array().min(1, 'This field is required'),
})



export default AssignNewMemberForm
