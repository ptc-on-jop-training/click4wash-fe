import {Box, FormControlLabel, Switch, TextField} from "@mui/material"
import {SectionTitle, Select} from "../../../../components"

function BookingInfoForm()
{
   return (
      <Box>
         <SectionTitle title={"Select your location & time slot"} {...cfn.title}/>
         <Box {...cfn.formContainer}>
            <Select {...cfn.commonSelect} label={"Location"}/>
            <TextField {...cfn.datePicker} label={"Date"}/>
            <Select {...cfn.commonSelect} label={"Time slot"}/>
            <FormControlLabel control={<Switch />} label="Charge Your Vehicle?" />
         </Box>
      </Box>
   )
}

const cfn = {
   title: {
      variant: "secondary" as const
   },

   formContainer: {
      sx: {
         display: "flex",
         flexDirection: "column",
         gap: 2.5
      }
   },

   commonSelect: {
      fullWidth: true,
   },

   datePicker: {
      type: "date",
      fullWidth: true,
      InputLabelProps: { shrink: true }
   }
}

export default BookingInfoForm