import {configureStore} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import VehicleStores from "./vehicle-stores.ts"
import AccountStores from "./account-stores.ts"
import General_conditionStore from "./general-condition-store.ts"
import ParkingSlotStores from "./parking-slot-stores.ts"
import LocationStores from "./location-stores.ts"
import BookingStore from "./booking-store.ts"
import PolicyStore from "./policy-store.ts"
import CreateBookingForm from "./create-booking-form-store.ts"

const RootStore = configureStore({
   reducer: {
      vehicle: VehicleStores,
      account: AccountStores,
      generalCondition :General_conditionStore,
      parkingSlot: ParkingSlotStores,
      location: LocationStores,
      booking: BookingStore,
      policy: PolicyStore,
      createBookingForm: CreateBookingForm,
   }
})

export const useRootDispatch: () => typeof RootStore.dispatch = useDispatch
export type RootStateType = ReturnType<typeof RootStore.getState>
export default RootStore