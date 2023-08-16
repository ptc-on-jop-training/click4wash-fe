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
   SelectChangeEvent, MenuItem,
} from "@mui/material"
import {Select} from "../../../../components"
import {useDispatch, useSelector} from "react-redux"
import {pushPackingSlot, RootStateType} from "../../../../stores"

interface CreateNewFormProps {
    isOpen: boolean
    handleClose: () => void
}

function CreateParkingSlotFrom(props: CreateNewFormProps) {

   const dispatch = useDispatch()
   const Location = useSelector((state: RootStateType) => state.location.locationList)

   const LocationList = Location?.map(location => {
      const address = location.address
      const addressString = Object.values(address).join(', ')
      return {
         id: location.id,
         name: `${location.name}-${addressString}`
      }
   }) ?? []

   const form = useFormik({
      initialValues: {
         locationId: "",
         name: "",
      },

      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {
         const foundLocation = Location?.find((location) => location.id === values.locationId)
         const id = Math.random().toString(36)
         const newValues = {
            ...values,
            id: id,
            address: foundLocation ? foundLocation.address : {line1: "", line2: "", line3: ""},
            locationName: foundLocation?.name,
            isBusy: false,
         }
         dispatch(pushPackingSlot(newValues))
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

   const renderLocationSelect = () => {
      return LocationList.map(option => (
         <MenuItem key={option.id} value={option.id} sx={{fontSize: "13px"}}>
            {option.name}
         </MenuItem>
      ))
   }

   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>

         <DialogTitle>
                Create New Packing Slot
         </DialogTitle>

         <DialogContent>
            <Select
               error={!!(touched.locationId && errors.locationId)}
               helperText={touched.locationId && errors.locationId}
               name={"locationId"} value={values.locationId}
               onChange={handleInputChange} onBlur={handleBlur}
               label={"Location"} required
               fullWidth margin={"normal"}
               renderOptions={renderLocationSelect}/>

            <TextField
               error={!!(touched.name && errors.name)}
               helperText={touched.name && errors.name} value={values.name}
               onBlur={handleBlur} onChange={handleInputChange}
               fullWidth required name={"name"} margin={"normal"} label={"Name"} type={"text"}
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
   locationId: Yup.string().required('This field is required'),
   name: Yup.string().required('This field is required'),
})

export default CreateParkingSlotFrom

