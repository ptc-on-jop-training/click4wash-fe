import { SectionTitle } from "../../../components"
import { Button, Container, IconButton, Modal, Stack } from "@mui/material"
import { Close } from "@mui/icons-material"

import dayjs, { Dayjs } from "dayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useState } from "react"

interface HolidayModalProps {
   isOpen: boolean
   handleClose?: () => void
}

const HolidayModal = (props: HolidayModalProps) => {
   const [startDay, setStartDay] = useState<Dayjs | null>(dayjs(""))
   const [endDay, setEndDay] = useState<Dayjs | null>(dayjs(""))

   const calculateDayDifference = () => {
      if (startDay && endDay) {
         const diffInDays = endDay.diff(startDay, "day")
         return diffInDays
      }
      return 0
   }
   // calculateDayDifference()
   return (
      <Modal open={props.isOpen} onClose={props.handleClose}>
         <Container {...cfn.box}>
            <SectionTitle
               title={"Set Holiday"}
               rightSlot={
                  <IconButton onClick={props.handleClose}>
                     <Close />
                  </IconButton>
               }
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <Stack spacing={4}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                     <DatePicker
                        label="Start Day"
                        value={startDay}
                        onChange={(newValue) => setStartDay(newValue)}
                     />
                  </DemoContainer>

                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                     <DatePicker
                        label="End Day"
                        value={endDay}
                        onChange={(newValue) => setEndDay(newValue)}
                     />
                  </DemoContainer>
               </Stack>
            </LocalizationProvider>
            <Stack>
               <Button
                  variant="contained"
                  onClick={() => console.log(calculateDayDifference())}
               >
                  send
               </Button>
            </Stack>
         </Container>
      </Modal>
   )
}

const cfn = {
   box: {
      sx: {
         bgcolor: "background.default",
         paddingTop: 5,
         height: "100%",
         width: "100%",
      },
   },
}
export default HolidayModal
