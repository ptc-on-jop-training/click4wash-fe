import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface CreateBookingFormStoreType
{
   isOpen: boolean
   totalStep: number
   currentStep: number
   vehicle: {
      id: string
   },
   bookingInfo: {
      locationId: string
      bookedAt: string
      timeSlot: string | null,
      parkingSlotId: string,
      isCharge: boolean
   }
}

const initialState: CreateBookingFormStoreType = {
   isOpen: true,
   totalStep: 2,
   currentStep: 0,
   vehicle: {
      id: ""
   },
   bookingInfo: {
      locationId: "",
      parkingSlotId: "",
      bookedAt: (new Date()).toISOString().split('T')[0],
      timeSlot: null,
      isCharge: false
   }
}

const CreateBookingFormSlice = createSlice({

   name: "createBookingForm",
   initialState,

   reducers: {
      NextStepCreateBooking(state) {
         if (state.currentStep === state.totalStep - 1) {
            return
         }
         state.currentStep += 1
      },
      BackStepCreateBooking(state) {
         if (state.currentStep === 0) {
            return
         }
         state.currentStep -= 1
      },
      ResetCreateBookingForm(state) {
         state.totalStep = initialState.totalStep
         state.currentStep = initialState.currentStep
         state.vehicle = initialState.vehicle
         state.bookingInfo = initialState.bookingInfo
      },
      SetCreateBookingFromDataVehicle(state, action: PayloadAction<{vehicleId: string}>) {
         state.vehicle.id = action.payload.vehicleId
      },
      SetCreateBookingFromDataBookingInfo(state, action: PayloadAction<CreateBookingFormStoreType["bookingInfo"]>) {
         console.log(action.payload)
         state.bookingInfo = action.payload
      },
      SetCreateBookingFromIsOpen(state, action: PayloadAction<boolean>) {
         state.isOpen = action.payload
      }
   },
})

export const {SetCreateBookingFromIsOpen, SetCreateBookingFromDataBookingInfo, SetCreateBookingFromDataVehicle, NextStepCreateBooking, BackStepCreateBooking, ResetCreateBookingForm} = CreateBookingFormSlice.actions
export default CreateBookingFormSlice.reducer