import { createSlice } from "@reduxjs/toolkit"

interface HolidayStoreType {
   isHoliday: boolean
}

const initialState: HolidayStoreType = {
   isHoliday: false,
}

const HolidaySlice = createSlice({
   name: "holiday",
   initialState,

   reducers: {
      setHolidayReducer(state, action) {
         state.isHoliday = action.payload
      },
   },
})
export {}
export const { setHolidayReducer } = HolidaySlice.actions
export default HolidaySlice.reducer
