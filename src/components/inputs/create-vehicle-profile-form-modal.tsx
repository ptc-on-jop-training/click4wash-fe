import {Button, Container, FormGroup, IconButton, Modal, TextField} from "@mui/material"
import {SectionTitle} from "../index.ts"
import {Close} from '@mui/icons-material'
import VehicleColorSelector from "./vehicle-color-selector.tsx"
import * as Yup from "yup"
import {useFormik} from "formik"
import {ChangeEvent} from "react"

interface CreateVehicleProfileFormModalProps
{
   isOpen: boolean
   handleClose?: () => void
}

function CreateVehicleProfileFormModal(props: CreateVehicleProfileFormModalProps)
{
   const {values, touched, errors, resetForm, handleSubmit, handleBlur, handleChange, setFieldError} = useFormik<CreateVehicleFormModel>({
      initialValues: {
         model: "",
         numberPlate: "",
      },
      validateOnChange: false,
      validateOnBlur: true,
      onSubmit: (values) => {
         console.log(values)
      },
      validationSchema
   })

   const handleInputChange = (e: ChangeEvent<any>) => {
      setFieldError(e.target.name, "")
      handleChange(e)
   }

   const handleCloseForm = () => {
      resetForm()
      props.handleClose && props.handleClose()
   }

   return (
      <Modal open={props.isOpen} onClose={handleCloseForm}>
         <Container {...cfn.box}>

            <SectionTitle
               title={"Vehicle Information"}
               rightSlot={<IconButton onClick={handleCloseForm}><Close/></IconButton>}
            />

            <FormGroup {...cfn.form}>
               <TextField
                  name={"numberPlate"} value={values.numberPlate}
                  error={!!(touched.numberPlate && errors.numberPlate)}
                  helperText={touched.numberPlate && errors.numberPlate}
                  onBlur={handleBlur} onChange={handleInputChange}
                  label={"Number Plate"} {...cfn.field}/>
               <TextField
                  name={"model"} value={values.model}
                  error={!!(touched.model && errors.model)}
                  helperText={touched.model && errors.model}
                  onBlur={handleBlur} onChange={handleInputChange}
                  label={"Model"} {...cfn.field}/>
               <VehicleColorSelector/>

               <Button {...cfn.submitBtn} onClick={() => handleSubmit()}>Submit</Button>
            </FormGroup>

         </Container>
      </Modal>
   )
}

interface CreateVehicleFormModel
{
   numberPlate: string
   model: string
}

const validationSchema = Yup.object().shape({
   numberPlate: Yup.string().required("invalid number plate"),
   model: Yup.string().required("invalid model")
})

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%"
      }
   },

   title: {
      variant: "h6" as const
   },

   form: {
      sx: {
         width: "100%",
         marginTop: 2,
         gap: 3
      }
   },
   field: {
      fullWidth: true,
      required: true
   },

   submitBtn: {
      variant: "contained" as const,
      size: "large" as const,
      sx: {
         marginTop: 2
      }
   }
}

export default CreateVehicleProfileFormModal