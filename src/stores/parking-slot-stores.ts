import {ParkingSlotResponse} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {GetParkingSlotList} from "../services/api"

interface ParkingSlotStoreType {
   parkingSlotList: ParkingSlotResponse[] | null
}

const initialState: ParkingSlotStoreType = {
   parkingSlotList: null
}

const FetchParkingSlotList = createAsyncThunk("parkingSlot/FetchParkingSlotList", async (): Promise<ParkingSlotResponse[] | null> => {
   return (await GetParkingSlotList()).payload ?? null
})

const ParkingSlotSlice = createSlice({
   name: "parkingSlot",
   initialState,
   reducers: {
      pushPackingSlot: (state, action: PayloadAction<ParkingSlotResponse>) => {
         state.parkingSlotList = [action.payload, ...(state.parkingSlotList ?? [])]
      },

   },
   extraReducers: (builder) => {
      builder
         .addCase(FetchParkingSlotList.fulfilled, (state, action) => {
            state.parkingSlotList = action.payload
         })
   }
})
export {FetchParkingSlotList}
export const {pushPackingSlot} = ParkingSlotSlice.actions
export default ParkingSlotSlice.reducer

