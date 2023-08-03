import {GetLocationList, LocationResponse} from "../services/api"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

interface LocationStoresType {
   locationList: LocationResponse[] | null
}

const initialState: LocationStoresType = {
   locationList: null
}

const FetchLocationList = createAsyncThunk("location/FetchLocationList", async (): Promise<LocationResponse[] | null> => {
   return (await GetLocationList()).payload ?? null
})

const LocationSlice = createSlice({

   name: "location",
   initialState,

   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(FetchLocationList.fulfilled, (state, action) => {
            state.locationList = action.payload
         })
   }
})

export {FetchLocationList}

export default LocationSlice.reducer