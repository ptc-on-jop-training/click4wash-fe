import {PackingSlotResponse} from "../services/api"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {GetPackingSlotList} from "../services/api"

interface PackingSlotStoreType {
   packingSlotList: PackingSlotResponse[] | null
}

const initialState: PackingSlotStoreType = {
   packingSlotList: null
}

const FetchPackingSlotList = createAsyncThunk("packingSlot/FetchPackingSlotList", async (): Promise<PackingSlotResponse[] | null> => {
   return (await GetPackingSlotList()).payload ?? null
})

const PackingSlotSlice = createSlice({
   name: "packingSlot",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(FetchPackingSlotList.fulfilled, (state, action) => {
            state.packingSlotList = action.payload
         })
   }
})
export {FetchPackingSlotList}
export default PackingSlotSlice.reducer

