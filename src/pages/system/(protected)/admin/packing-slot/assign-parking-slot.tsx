import {BaseSelect} from "../../../../../components"
import {Box} from "@mui/material"
import {useState} from "react"
import {SelectChangeEvent} from "@mui/material/Select"

// type AssignParkingSlotProps = {
//    params: any;
// };
function AssignParkingSlot() {
   const ValueSelect = ["Ho Thi Nguyet", "Dang Xuan Vinh"]
   const [value, setValue] = useState<string>("")

   const handleSelectOnChange = (e: SelectChangeEvent<string>) => {
      setValue(e.target.value)
   }
   return (
      <Box>
         <BaseSelect
            id="role"
            name="role"
            labelId="mySelectLabel"
            label="Assign by"
            options={ValueSelect}
            value={value}
            onChange={handleSelectOnChange}
         />
      </Box>
   )
}

export default AssignParkingSlot