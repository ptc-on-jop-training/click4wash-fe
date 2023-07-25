import RootStore, {useRootDispatch, RootStateType} from "./root-store.ts"
import {FetchVehicleList} from "./vehicle-stores.ts"
import {FetchAccountList} from "./account-stores.ts"

export {
   RootStore,
   useRootDispatch,
   type RootStateType,

   // vehicle store
   FetchVehicleList,
   FetchAccountList
}