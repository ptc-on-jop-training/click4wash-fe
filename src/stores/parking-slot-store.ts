import {ParkingSlotResponse} from "../services/api"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
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
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(FetchParkingSlotList.fulfilled, (state, action) => {
            state.parkingSlotList = action.payload
         })
   }
})
export {FetchParkingSlotList}
export default ParkingSlotSlice.reducer

