import RootStore, {useRootDispatch, RootStateType} from "./root-store.ts"
import {FetchAccountList,pushToAllAccountList,deleteAccountById} from "./account-stores.ts"
import {FetchVehicleList, AddToHeadVehicleList} from "./vehicle-stores.ts"
import {FetchParkingSlotList,pushPackingSlot} from "./parking-slot-stores.ts"
import {FetchLocationList} from "./location-stores.ts"
import {FetchBookingList} from "./booking-store.ts"
import {NextStepCreateBooking, BackStepCreateBooking, ResetCreateBookingForm, SetCreateBookingFromDataBookingInfo, SetCreateBookingFromDataVehicle} from "./create-booking-form-store.ts"

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

   FetchParkingSlotList,
   pushPackingSlot,

   FetchLocationList,

   // booking store
   FetchBookingList,

   deleteAccountById,

   // create booking from store
   NextStepCreateBooking,
   BackStepCreateBooking,
   ResetCreateBookingForm,
   SetCreateBookingFromDataBookingInfo,
   SetCreateBookingFromDataVehicle
}