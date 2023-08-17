export const getTime = (time: string) => {
   try {
      const dt = new Date(time)
      const hours = String(dt.getHours()).padStart(2, "0")
      const minutes = String(dt.getMinutes()).padStart(2, "0")
      return hours + ":" + minutes
   } catch (error) {
      return ""
   }
}

export const getDay = (time: string) => {
   try {
      const dt = new Date(time)
      const year = dt.getFullYear()
      const month = String(dt.getMonth() + 1).padStart(2, "0")
      const day = String(dt.getDate()).padStart(2, "0")
      return day + "-" + month + "-" + year
   } catch (error) {
      return ""
   }
}