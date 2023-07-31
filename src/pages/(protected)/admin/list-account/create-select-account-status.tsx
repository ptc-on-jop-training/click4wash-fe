import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { AccountStatusEnum } from "../../../../services/auth0"
import AccountStatus from "./account-status.tsx"
import CreateFormConfirmChangeStatus from "./create-form-confirm-change-status.tsx"

interface CreateSelectAccountStatusProps {
   status: AccountStatusEnum
}

function CreateSelectAccountStatus(props: CreateSelectAccountStatusProps) {
   const [status, setStatus] = useState<any>(props.status)
   const [newStatus, setNewStatus] = useState<string>(props.status)
   const [open, setOpen] = useState<boolean>(false)

   const handleStatusChange = (event: SelectChangeEvent<{ value: unknown }>) => {
      const newStatus = event.target.value as AccountStatusEnum
      setNewStatus(newStatus)
      setOpen(true)
   }

   const handleConfirmation = () => {
      setStatus(newStatus)
      setOpen(false)
   }

   return (
      <>
         <Select
            {...cfg.select}
            required
            fullWidth
            margin={"dense"}
            value={status}
            onChange={handleStatusChange}
         >
            {statusSelectData.map((option) => (
               <MenuItem key={option.id} value={option.status}>
                  <AccountStatus status={option.status} />
               </MenuItem>
            ))}
         </Select>

         <CreateFormConfirmChangeStatus open={open} onClose={() => setOpen(false)} onClick={handleConfirmation} />
      </>
   )
}

interface RoleSelectData {
   id: number
   status: AccountStatusEnum
}

const statusSelectData: RoleSelectData[] = Object.values(AccountStatusEnum).map((status, i) => ({
   id: i,
   status: status,
}))

const cfg = {
   select: {
      sx: {
         ".MuiOutlinedInput-notchedOutline": { border: 0 },
         "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: 0,
         },
         "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: 0,
         },
         width: 150,
      },
   },
}

export default CreateSelectAccountStatus
