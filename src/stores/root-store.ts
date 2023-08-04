import {configureStore} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import VehicleStores from "./vehicle-stores.ts"
import AccountStores from "./account-stores.ts"
import LocationStore from "./location-store.ts";
import BookingStore from "./booking-store.ts"

const RootStore = configureStore({
   reducer: {
      vehicle: VehicleStores,
      account: AccountStores,
      location:LocationStore,
      booking: BookingStore
   }
})

export const useRootDispatch: () => typeof RootStore.dispatch = useDispatch
export type RootStateType = ReturnType<typeof RootStore.getState>
export default RootStore