import {BookingResponse, GetBookingList} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"


interface BookingStoreType
{
   bookingList: BookingResponse[] | null
}


const initialState: BookingStoreType = {
   bookingList: null
}


const FetchBookingList = createAsyncThunk("booking/FetchBookingtList", async (): Promise<BookingResponse[] | null> => {
   return (await GetBookingList()).payload ?? null
})


const BookingSlice = createSlice({


   name: "booking",
   initialState,


   reducers: {
      PushToBookingList: (state, action: PayloadAction<BookingResponse>) => {
         state.bookingList = [action.payload, ...(state.bookingList ?? [])]
      }
   },


   extraReducers: (builder) => {
      builder
         .addCase(FetchBookingList.fulfilled, (state, action) => {
            state.bookingList = action.payload
         })
   }
})
export {FetchBookingList}
export const {PushToBookingList} = BookingSlice.actions
export default BookingSlice.reducer