import {GetLocationList, LocationResponse} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

interface LocationStoresType {
    locationList: LocationResponse[] | null
    locationSelected: LocationResponse | null
}

const initialState: LocationStoresType = {
   locationList: null,
   locationSelected: null
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
      setSelectedLocationById: (state, action: PayloadAction<{ id: string }>) => {
         state.locationSelected = state.locationList?.find(location => location.id === action.payload.id) ?? null
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

export const {addLocation,setSelectedLocationById} = LocationSlice.actions

export default LocationSlice.reducer