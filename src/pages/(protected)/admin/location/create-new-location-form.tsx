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
import {addLocation} from "../../../../stores/location-store.ts"
import {useDispatch} from "react-redux"

import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"

interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
}

function CreateNewLocationFrom(props: CreateNewFormProps) {
    
   const dispatch = useDispatch()

   const Users = useSelector((state: RootStateType) => state.account.accountList)

   const UserList = Users?.filter(user => user.role === 'team-member').map(user => user.email) ?? []

   const form = useFormik({
      initialValues: {
         name: "",
         address: {
            line1: "",
            line2: "",
            line3: "",
            line4: "",
         },
         teamMember: [],
      },

      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {
         const id = Math.random().toString(36)
         const newValues = {
            ...values,
            id: id,
         }

         console.log(values)
         dispatch(addLocation(newValues))
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

         <DialogTitle>Create New Location</DialogTitle>

         <DialogContent>
            <TextField
               error={!!(touched.name && errors.name)}
               helperText={touched.name && errors.name} value={values.name}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"name"} margin={"normal"} label={"Name"} type={"text"}
            />
            <TextField
               error={!!(touched.address?.line1 && errors.address?.line1)}
               helperText={touched.address?.line1 && errors.address?.line1} value={values.address?.line1}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"address.line1"} margin={"normal"} label={"province/city"} type={"text"}
            />
            <TextField
               error={!!(touched.address?.line2 && errors.address?.line2)}
               helperText={touched.address?.line2 && errors.address?.line2} value={values.address?.line2}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"address.line2"} margin={"normal"} label={"District"} type={"text"}
            />
            <TextField
               error={!!(touched.address?.line3 && errors.address?.line3)}
               helperText={touched.address?.line3 && errors.address?.line3} value={values.address?.line3}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"address.line3"} margin={"normal"} label={"wards"} type={"text"}
            />
            <TextField
               error={!!(touched.address?.line4 && errors.address?.line4)}
               helperText={touched.address?.line4 && errors.address?.line4} value={values.address?.line4}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth name={"address.line4"} margin={"normal"} label={"specific address"} type={"text"}
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
   name: Yup.string().required('This field is required'),
   address: Yup.object().shape({
      line1: Yup.string().required('This field is required'),
      line2: Yup.string().required('This field is required'),
      line3: Yup.string().required('This field is required'),
      line4: Yup.string().required('This field is required'),
   }),
   teamMember: Yup.array().min(1, 'This field is required'),
})


export default CreateNewLocationFrom
