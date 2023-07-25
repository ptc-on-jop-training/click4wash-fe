import {GetVehicleList, VehicleResponse} from "../services/api"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

interface VehicleStoresType
{
   vehicleList: VehicleResponse[] | null
}

const initialState: VehicleStoresType = {
   vehicleList: null
}

const FetchVehicleList = createAsyncThunk("vehicle/FetchVehicleList", async (): Promise<VehicleResponse[] | null> => {
   return (await GetVehicleList()).payload ?? null
})

const VehicleSlice = createSlice({

   name: "vehicle",
   initialState,

   reducers: {

   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchVehicleList.fulfilled, (state, action) => {
            state.vehicleList = action.payload
         })
   }
})

export {FetchVehicleList}
export default VehicleSlice.reducer