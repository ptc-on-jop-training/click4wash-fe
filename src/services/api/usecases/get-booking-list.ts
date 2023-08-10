import {Response, StatusCode} from "../../common"
import {BookingResponse} from "../index.ts"
import axios from "axios"


async function GetBookingList(): Promise<Response<BookingResponse[]>>
{
   const p = "https://64c8ab3ba1fe0128fbd60811.mockapi.io/bookings"


   return new Promise(async (resolve) => {
      const res = await axios.get<BookingResponse[]>(p)
      resolve({
         code: StatusCode.Ok,
         payload: res.data
      })
   })
}


export default GetBookingList

