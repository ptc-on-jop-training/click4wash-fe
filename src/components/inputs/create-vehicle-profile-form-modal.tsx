import {Button, Container, FormGroup, IconButton, MenuItem, Modal, TextField} from "@mui/material"
import {SectionTitle, Select} from "../index.ts"
import {Close} from '@mui/icons-material'
import VehicleColorSelector from "./vehicle-color-selector.tsx"
import * as Yup from "yup"
import {useFormik} from "formik"
import {ChangeEvent, useState} from "react"
import {CreateVehicle, CreateVehicleRequest, VehicleType} from "../../services/api"
import {LoadingButton} from "@mui/lab"
import {AddToHeadVehicleList} from "../../stores"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

interface CreateVehicleProfileFormModalProps
{
   isOpen: boolean
   handleClose?: () => void
   variant: "new" | "init"
}

function CreateVehicleProfileFormModal(props: CreateVehicleProfileFormModalProps)
{
   const [isSubmitBtnLoading, setIsSubmitBtnLoading] = useState(false)
   const dispatch = useDispatch()
   const nav = useNavigate()

   const {
      values, touched,
      errors, resetForm,
      handleSubmit, handleBlur, handleChange, setFieldValue, setFieldError
   } = useFormik<CreateVehicleRequest>({

      initialValues: {
         model: "",
         numberPlate: "",
         color: null,
         type: null
      },

      validateOnChange: false,
      validateOnBlur: true,
      validationSchema,

      onSubmit: (values) => {
         setIsSubmitBtnLoading(true)
         CreateVehicle(values)
            .then((res) => {
               setIsSubmitBtnLoading(false)
               dispatch(AddToHeadVehicleList(res.payload!))
               if (props.variant === "new") {
                  handleSubmitNew()
               } else if (props.variant === "init") {
                  handleSubmitInit()
               }
               resetForm()
            })
      },
   })

   const handleSubmitNew = () => {
      props.handleClose && props.handleClose()
   }

   const handleSubmitInit = () => {
      nav("/", {replace: true})
   }

   const handleInputChange = (e: ChangeEvent<any>) => {
      setFieldError(e.target.name, "")
      handleChange(e)
   }

   const handleCloseForm = () => {
      resetForm()
      props.handleClose && props.handleClose()
   }

   const handleColorSelectorChange = (newValue: string | null) => {
      setFieldError("color", "")
      setFieldValue("color", newValue)
   }

   return (
      <Modal open={props.isOpen} onClose={handleCloseForm}>
         <Container {...cfn.box}>

            <SectionTitle
               title={"Vehicle Information"}
               rightSlot={
                  props.variant === "new"
                     ? <IconButton onClick={handleCloseForm}><Close/></IconButton>
                     : <Button {...cfn.skipBtn} onClick={handleCloseForm}>skip</Button>
               }
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
               <Select
                  required
                  name={"type"} value={values.type}
                  error={!!(touched.type && errors.type)}
                  helperText={touched.type && errors.type}
                  renderOptions={() => Object.values(VehicleType).map((type) => {
                     return <MenuItem key={type} value={type}>{type}</MenuItem>
                  })}
                  onChange={handleChange} onBlur={handleBlur}
                  id={"type"} label={"Type"}/>
               <VehicleColorSelector
                  value={values.color}
                  error={touched.color && errors.color}
                  onChange={handleColorSelectorChange}
               />

               <LoadingButton {...cfn.submitBtn} loading={isSubmitBtnLoading} onClick={() => handleSubmit()}>Submit</LoadingButton>
            </FormGroup>

         </Container>
      </Modal>
   )
}

const validationSchema = Yup.object().shape({
   numberPlate: Yup.string().required("number plate is required"),
   model: Yup.string().required("model is required"),
   type: Yup.string().required("type is required"),
   color: Yup.string().required("color is required")
})

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
         border: "none",
         outline: "none"
      }
   },

   title: {
      variant: "h6" as const
   },
   skipBtn: {
      size: "small" as const,
      sx: {
         padding: "0 7px",
         textTransform: "lowercase",
         fontWeight: "bold",
         display: "inline",
         minHeight: 0,
         minWidth: 0,
      }
   },

   form: {
      sx: {
         width: "100%",
         marginTop: 2,
         gap: 2
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