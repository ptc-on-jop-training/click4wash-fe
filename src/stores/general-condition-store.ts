import {GeneralConditionResponse} from "../services/api"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface GeneralConditionType
{
    generalCondition: GeneralConditionResponse[] | null
}

const initialState: GeneralConditionType = {
   generalCondition: null
}

const GeneralConditionSlice = createSlice({

   name: "generalCondition",
   initialState,

   reducers: {
      pushToAllGeneralCondition: (state, action: PayloadAction<GeneralConditionResponse>) => {
         state.generalCondition = [action.payload, ...(state.generalCondition ?? [])]
      },

   },
})
export const {pushToAllGeneralCondition} = GeneralConditionSlice.actions
export default GeneralConditionSlice.reducer