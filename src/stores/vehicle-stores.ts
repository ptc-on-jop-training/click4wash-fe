import {GetVehicleList, VehicleResponse} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

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
      AddToHeadVehicleList: (state, action: PayloadAction<VehicleResponse>) => {
         state.vehicleList = [action.payload, ...(state.vehicleList ?? [])]
      }
   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchVehicleList.fulfilled, (state, action) => {
            state.vehicleList = action.payload
         })
   }
})

export {FetchVehicleList}
export const {AddToHeadVehicleList} = VehicleSlice.actions
export default VehicleSlice.reducer