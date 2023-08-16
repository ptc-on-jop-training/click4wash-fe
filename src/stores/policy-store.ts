import {PolicyResponse,GetPolicyList} from "../services/api"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

interface PolicyStoreType
{
   policyList: PolicyResponse[] | null
}

const initialState: PolicyStoreType = {
   policyList: null
}

const FetchPolicyList = createAsyncThunk("policy/FetchPolicyList", async (): Promise<PolicyResponse[] | null> => {
   return (await GetPolicyList()).payload ?? null  
})

const PolicySlice = createSlice({

   name: "policy",
   initialState,

   reducers: {
      replacePolicyByNew:(state, action:PayloadAction<PolicyResponse>) =>{
         const newPolicyList = state.policyList!
         const index = newPolicyList.findIndex((policy) => policy.id  === action.payload.id)
         if(index !== undefined && index >= 0) {
            newPolicyList[index] = action.payload
         }
         else {
            newPolicyList.unshift(action.payload)
         }
         state.policyList = newPolicyList

      }
      
   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchPolicyList.fulfilled, (state, action) => {
            state.policyList = action.payload
         })
   }
})
export {FetchPolicyList}
export const {replacePolicyByNew} = PolicySlice.actions
export default PolicySlice.reducer