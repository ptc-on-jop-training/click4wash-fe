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
import CreateParkingSlot from "../../../../services/api/usecases/create-parking-slot.ts"

interface CreateNewFormProps {
   isOpen: boolean
   handleClose: () => void
}

function CreateParkingSlotFrom(props: CreateNewFormProps) {

   const dispatch = useDispatch()
   const Location = useSelector((state: RootStateType) => state.location.locationList)

   const LocationList = Location?.map(location => location.name) ?? []

   const form = useFormik({
      initialValues: {
         locationName: "",
         name: "",
      },

      validationSchema: formValidation,
      validateOnChange: false,
      validateOnBlur: true,

      onSubmit: (values) => {
         const foundLocation = Location?.find((location) => location.name === values.locationName)
         const address = foundLocation ? foundLocation.address : {}
         CreateParkingSlot(values, address).then((res) => {
            dispatch(pushPackingSlot(res.payload!))
         })
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
      return LocationList.map((option: string) => (
         <MenuItem key={option} value={option}>
            {option}
         </MenuItem>
      ))
   }


   return (
      <Dialog maxWidth={"xs"} fullWidth open={props.isOpen} onClose={props.handleClose}>

         <DialogTitle {...cfn.formTitle}>
            Create New Packing SLot
         </DialogTitle>

         <DialogContent>
            <Select
               error={!!(touched.locationName && errors.locationName)}
               helperText={touched.locationName && errors.locationName}
               name={"locationName"} value={values.locationName}
               onChange={handleInputChange} onBlur={handleBlur}
               label={"Choose Location"} required
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
   locationName: Yup.string().required('This field is required'),
   name: Yup.string().required('This field is required'),
})

const cfn = {
   formTitle: {
      color: "primary" as const,
      sx: {
         textAlign: "center",
         fontWeight: "bold", fontSize: '30px'
      }
   }
}

export default CreateParkingSlotFrom

