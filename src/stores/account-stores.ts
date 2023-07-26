import {AccountResponse} from "../services/auth0"
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
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

   },

   extraReducers: (builder) => {
      builder
         .addCase(FetchAccountList.fulfilled, (state, action) => {
            state.accountList = action.payload
         })
   }
})
export {FetchAccountList}
export default AccountSlice.reducer