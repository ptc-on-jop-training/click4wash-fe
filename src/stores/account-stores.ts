import {AccountResponse} from "../services/auth0"
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {GetAccountList} from "../services/auth0"

interface AccountStoresType
{
   accountList: AccountResponse[] | null
}

const initialState: AccountStoresType = {
   accountList: null
}

const FetchAccountList = createAsyncThunk("account/FetchAccountList", async (): Promise<AccountResponse[] | null> => {
   return (await GetAccountList()).payload ?? null
})

const AccountSlice = createSlice({

   name: "account",
   initialState,

   reducers: {
      pushToAllAccountList: (state, action: PayloadAction<AccountResponse>) => {
         state.accountList = [action.payload, ...(state.accountList ?? [])]
      },

   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchAccountList.fulfilled, (state, action) => {
            state.accountList = action.payload
         })
   }
})
export {FetchAccountList}
export const {pushToAllAccountList} = AccountSlice.actions
export default AccountSlice.reducer