import {createSlice} from "@reduxjs/toolkit"

interface CreateBookingFormStoreType
{
   totalStep: number
   currentStep: number
}

const initialState: CreateBookingFormStoreType = {
   totalStep: 2,
   currentStep: 0
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
      }
   },

})

export const {NextStepCreateBooking, BackStepCreateBooking, ResetCreateBookingForm} = CreateBookingFormSlice.actions
export default CreateBookingFormSlice.reducer