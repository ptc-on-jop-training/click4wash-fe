import RootStore, {useRootDispatch, RootStateType} from "./root-store.ts"
import {FetchAccountList,pushToAllAccountList} from "./account-stores.ts"
import {FetchVehicleList, AddToHeadVehicleList} from "./vehicle-stores.ts"
import {NextStepCreateBooking, BackStepCreateBooking, ResetCreateBookingForm} from "./create-booking-form-store.ts"

export {
   RootStore,
   useRootDispatch,
   type RootStateType,

   // vehicle store
   FetchVehicleList,
   AddToHeadVehicleList,

   // account store
   FetchAccountList,
   pushToAllAccountList,

   // create booking from store
   NextStepCreateBooking,
   BackStepCreateBooking,
   ResetCreateBookingForm
}