import {configureStore} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import VehicleStores from "./vehicle-stores.ts"
import AccountStores from "./account-stores.ts"
import ParkingSlotStores from "./parking-slot-stores.ts"
import LocationStores from "./location-stores.ts"

const RootStore = configureStore({
   reducer: {
      vehicle: VehicleStores,
      account: AccountStores,
      parkingSlot: ParkingSlotStores,
      location: LocationStores,
   }
})

export const useRootDispatch: () => typeof RootStore.dispatch = useDispatch
export type RootStateType = ReturnType<typeof RootStore.getState>
export default RootStore