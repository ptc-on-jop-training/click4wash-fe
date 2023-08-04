import {createSlice} from "@reduxjs/toolkit"
import {Booking} from "../services/api"

interface BookingStoreType
{
   bookingList: Booking[] | null
}

const initialState: BookingStoreType = {
   bookingList: null
}

const BookingSlice = createSlice({

   name: "booking",
   initialState,

   reducers: {

   }
})

export const {} = BookingSlice.actions
export default BookingSlice.reducer