import RootStore, {useRootDispatch, RootStateType} from "./root-store.ts"
import {FetchAccountList,pushToAllAccountList} from "./account-stores.ts"
import {FetchVehicleList, AddToHeadVehicleList} from "./vehicle-stores.ts"
import {FetchLocationList} from "./location-store.ts"
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

   FetchLocationList
}