import {Box, FormControlLabel, Switch, TextField, Autocomplete, MenuItem, SelectChangeEvent} from "@mui/material"
import {SectionTitle, Select} from "../../../../components"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType, SetCreateBookingFromDataBookingInfo} from "../../../../stores"
import {FormatTimeSlot, TimeSlots} from "../../../../services/api"
import {useState} from "react"

function BookingInfoForm()
{
   const dispatch = useDispatch()
   const {bookingInfo} = useSelector((state: RootStateType) => state.createBookingForm)
   const [timeSlotKey, setTimeSlotKey] = useState<keyof typeof TimeSlots | null>(null)
   const locationList = useSelector((state: RootStateType) => state.location.locationList?.map(location => {
      return {
         id: location.id,
         label: location.name + " - "+ Object.values(location.address).join(' / ')
      }
   }))

   const renderTimeSlot = () => {
      return Object.keys(TimeSlots).map((key) => (
         <MenuItem key={key} value={key}>
            {FormatTimeSlot(TimeSlots[key as keyof typeof TimeSlots])}
         </MenuItem>
      ))
   }

   const onChangeTimeSlot = (event: SelectChangeEvent) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         "timeSlot": event.target.value
      }))
      setTimeSlotKey(event.target.value as keyof typeof TimeSlots)
   }

   const onChangeLocation = (_: any, newValue: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         locationId: newValue?.id ?? ""
      }))
   }

   const onDateChange = (e: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         createdAt: e.target.value
      }))
   }

   const onIsChargeChange = (e: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         isCharge: e.target.checked
      }))
   }

   return (
      <Box>
         <SectionTitle title={"Select your location & time slot"} {...cfn.title}/>
         <Box {...cfn.formContainer}>
            <Autocomplete
               {...cfn.commonSelect}
               id={"locationId"}
               options={locationList ?? []}
               onChange={onChangeLocation}
               isOptionEqualToValue={(option, value) => option.id === value.id}
               renderInput={(params) =>
                  <TextField
                     {...params} name={"locationId"}
                     required label={"Location"}/>}
            />
            <TextField onChange={onDateChange} {...cfn.datePicker} id={"createdAt"} required label={"Date"}/>
            <Select
               {...cfn.commonSelect}
               onChange={onChangeTimeSlot}
               required value={timeSlotKey}
               renderOptions={renderTimeSlot}
               id={"timeSlot"}
               label={"Time slot"}/>
            <FormControlLabel control={<Switch onChange={onIsChargeChange} id={"isCharge"}/>} label="Charge Your Vehicle?" />
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