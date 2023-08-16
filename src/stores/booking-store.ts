import { BookingResponse, GetBookingList } from "../services/api"
import {
   createAsyncThunk,
   createSlice,
   PayloadAction,
   Dispatch,
} from "@reduxjs/toolkit"

interface BookingStoreType {
   bookingList: BookingResponse[]
}

const initialState: BookingStoreType = {
   bookingList: [],
}

const FetchBookingList = createAsyncThunk(
   "booking/FetchBookingtList",
   async (): Promise<BookingResponse[] | null> => {
      return (await GetBookingList()).payload ?? null
   }
)

const UpdateBookingHistoryList =
   (
      bookingList: BookingResponse[],
      bookingId: string,
      status?: any,
      comment?: string
   ) =>
      (dispatch: Dispatch) => {
         const updatedBookingList = bookingList.map((booking) => {
            if (booking.id === bookingId) {
               const lastHistory =
                  booking.historyList[booking.historyList.length - 1]

               const newHistory = {
                  id: (parseInt(lastHistory.id) + 1).toString(),
                  bookingId: lastHistory.bookingId,
                  creatorId: lastHistory.creatorId,
                  creatorEmail: lastHistory.creatorEmail,
                  status: status,
                  createdAt: new Date().toISOString(),
                  comment: comment || "",
               }

               const updatedHistoryList = [...booking.historyList, newHistory]

               return {
                  ...booking,
                  status: status,
                  historyList: updatedHistoryList,
               }
            }
            return booking
         })
         dispatch(UpdateBookingHistoryStatusReducer(updatedBookingList))
      }

const UpdateComment =
   (bookingList: BookingResponse[], bookingId: string, comment: string) =>
      (dispatch: Dispatch) => {
         const updatedBookingList = bookingList.map((booking) => {
            if (booking.id === bookingId) {
               return {
                  ...booking,
                  review: {
                     comment: comment,
                     rating: booking.review?.rating,
                  },
               }
            }
            return booking
         })
         dispatch(UpdateReviewReducer(updatedBookingList))
      }

const UpdateRating =
   (bookingList: BookingResponse[], bookingId: string, rating: number) =>
      (dispatch: Dispatch) => {
         const updatedBookingList = bookingList.map((booking) => {
            if (booking.id === bookingId) {
               return {
                  ...booking,
                  review: {
                     comment: booking.review?.comment,
                     rating: rating,
                  },
               }
            }
            return booking
         })
         dispatch(UpdateReviewReducer(updatedBookingList))
      }

const BookingSlice = createSlice({
   name: "booking",
   initialState,

   reducers: {
      PushToBookingList: (state, action: PayloadAction<BookingResponse>) => {
         state.bookingList = [action.payload, ...(state.bookingList ?? [])]
      },
      UpdateBookingHistoryStatusReducer: (state, action) => {
         state.bookingList = action.payload
      },
      UpdateReviewReducer: (state, action) => {
         state.bookingList = action.payload
      },
   },

   extraReducers: (builder) => {
      builder.addCase(FetchBookingList.fulfilled, (state, action) => {
         state.bookingList = action.payload
      })
   },
})
export const {
   PushToBookingList,
   UpdateBookingHistoryStatusReducer,
   UpdateReviewReducer,
} = BookingSlice.actions
export {
   FetchBookingList,
   UpdateBookingHistoryList,
   UpdateComment,
   UpdateRating,
}
export default BookingSlice.reducer
