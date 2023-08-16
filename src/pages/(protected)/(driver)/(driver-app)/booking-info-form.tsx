import {Box, FormControlLabel, Switch, TextField, Autocomplete, MenuItem, SelectChangeEvent} from "@mui/material"
import {SectionTitle, Select} from "../../../../components"
import {useDispatch, useSelector} from "react-redux"
import {RootStateType, SetCreateBookingFromDataBookingInfo} from "../../../../stores"
import {FormatTimeSlot, TimeSlots} from "../../../../services/api"
import {useEffect, useState} from "react"

function BookingInfoForm()
{
   const dispatch = useDispatch()
   const {bookingInfo} = useSelector((state: RootStateType) => state.createBookingForm)
   const [timeSlotKey, setTimeSlotKey] = useState<keyof typeof TimeSlots | null>(null)

   const locationList = useSelector((state: RootStateType) => state.location.locationList)
   const [locationListSelect, setLocationListSelect] = useState<{id: string, label: string}[]>()

   const parkingSlotList = useSelector((state: RootStateType) => state.parkingSlot.parkingSlotList)
   const [parkingSlotListSelect, setParkingSlotListSelect] = useState<{id: string, label: string}[]>()

   useEffect(() => {
      setParkingSlotListSelect(parkingSlotList?.filter(p => p.locationId === bookingInfo.locationId).map(p => (
         {
            id: p.id,
            label: p.name
         }
      )) ?? [])
   }, [bookingInfo.locationId])

   useEffect(() => {
      setLocationListSelect(locationList?.map(location => (
         {
            id: location.id,
            label: location.name + " - "+ Object.values(location.address).join(' / ')
         }
      )) ?? [])
   }, [locationList])

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
         timeSlot: event.target.value
      }))
      setTimeSlotKey(event.target.value as keyof typeof TimeSlots)
   }

   const onChangeLocation = (_: any, newValue: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         locationId: newValue?.id ?? "",
         parkingSlotId: ""
      }))
   }

   const onChangeParkingSlot = (_: any, newValue: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         parkingSlotId: newValue?.id ?? ""
      }))
   }

   const onDateChange = (e: any) => {
      dispatch(SetCreateBookingFromDataBookingInfo({
         ...bookingInfo,
         bookedAt: e.target.value
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
               options={locationListSelect ?? []}
               onChange={onChangeLocation}
               isOptionEqualToValue={(option, value) => option.id === value.id}
               renderInput={(params) =>
                  <TextField
                     {...params} name={"locationId"}
                     required label={"Location"}/>}
            />
            <Autocomplete
               {...cfn.commonSelect}
               id={"parkingSlotId"}
               options={parkingSlotListSelect ?? []}
               onChange={onChangeParkingSlot}
               isOptionEqualToValue={(option, value) => option.id === value.id}
               renderInput={(params) =>
                  <TextField
                     {...params} name={"parkingSlotId"}
                     required label={"Parking Slot"}/>}
            />
            <TextField onChange={onDateChange} defaultValue={(new Date()).toISOString().split('T')[0]} {...cfn.datePicker} id={"createdAt"} required label={"Date"}/>
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