import {GetLocationList, LocationResponse} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

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

   reducers: {
      addLocation: (state, action: PayloadAction<LocationResponse>) => {
         state.locationList = [action.payload, ...(state.locationList ?? [])]
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchLocationList.fulfilled, (state, action) => {
            state.locationList = action.payload
         })
   }
})

export {FetchLocationList}

export const {addLocation}= LocationSlice.actions

export default LocationSlice.reducer