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

import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"

interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
}

function CreateNewLocationFrom(props: CreateNewFormProps) {

   const Users = useSelector((state: RootStateType) => state.account.accountList)

   const UserList = Users?.filter(user => user.role === 'team-member').map(user => user.email) ?? []

   const form = useFormik({
      initialValues: {
         name: "",
         line1: "",
         line2: "",
         line3: "",
         line4: "",
         teamMember: [],
      },

      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {
         console.log(values)
         form.resetForm()
         props.handleClose()
      },
   })
   const {values, touched, errors, handleSubmit, handleBlur} = form
   const handleInputChange = (e: ChangeEvent<any> | SelectChangeEvent) => {
      form.setFieldError(e.target.name, "")
      form.handleChange(e)
   }


   const handleCancel = () => {
      form.resetForm()
      props.handleClose()
   }

   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>

         <DialogTitle>Create New Packing SLot</DialogTitle>

         <DialogContent>
            <TextField
               error={!!(touched.name && errors.name)}
               helperText={touched.name && errors.name} value={values.name}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"name"} margin={"normal"} label={"Name"} type={"text"}
            />
            <TextField
               error={!!(touched.line1 && errors.line1)}
               helperText={touched.line1 && errors.line1} value={values.line1}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"line1"} margin={"normal"} label={"province/city"} type={"text"}
            />
            <TextField
               error={!!(touched.line2 && errors.line2)}
               helperText={touched.line2 && errors.line2} value={values.line2}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"line2"} margin={"normal"} label={"District"} type={"text"}
            />
            <TextField
               error={!!(touched.line3 && errors.line3)}
               helperText={touched.line3 && errors.line3} value={values.line3}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"line3"} margin={"normal"} label={"wards"} type={"text"}
            />
            <TextField
               error={!!(touched.line4 && errors.line4)}
               helperText={touched.line4 && errors.line4} value={values.line4}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth name={"line4"} margin={"normal"} label={"specific address"} type={"text"}
            />
            <Autocomplete
               multiple
               id="size-small-outlined-multi"
               size="medium"
               value={values.teamMember}
               sx={{marginTop: 2}}
               options={UserList}
               onBlur={handleBlur}
               onChange={(e: ChangeEvent<any> | SelectChangeEvent, newValue: string[]) => {
                  form.setFieldValue('teamMember', newValue)
               }}
               renderInput={(params) => (
                  <TextField {...params} label="Size small" placeholder="Choose Team member"/>
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
   line1: Yup.string().required('This field is required'),
   line2: Yup.string().required('This field is required'),
   line3: Yup.string().required('This field is required'),
   line4: Yup.string().required('This field is required'),
   name: Yup.string().required('This field is required'),
   teamMember: Yup.array().min(1, 'This field is required'),
})


export default CreateNewLocationFrom
