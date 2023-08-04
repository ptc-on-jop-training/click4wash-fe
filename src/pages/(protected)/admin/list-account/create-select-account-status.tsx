import {Chip, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import { useState } from "react"
import { AccountStatusEnum } from "../../../../services/auth0"
import AccountStatus from "./account-status.tsx"
import {deleteAccountById,useRootDispatch} from "../../../../stores"
import {ConfirmationDialog} from "../../../../components"

interface CreateSelectAccountStatusProps {
   status: AccountStatusEnum
   id: string
}

function CreateSelectAccountStatus(props: CreateSelectAccountStatusProps) {
   const [status, setStatus] = useState<any>(props.status)
   const [newStatus, setNewStatus] = useState<string>(props.status)

   const [idAccount,setIdAccount] = useState<string>("")

   const [openFormChangeStatus, setOpenFormChangeStatus] = useState<boolean>(false)
   const [openFormDelete, setOpenFormDelete] = useState<boolean>(false)

   const dispatch = useRootDispatch()
   const handleStatusChange = (event: SelectChangeEvent<{ value: unknown }>) => {
      const value = event.target.value as AccountStatusEnum
      if( value === "active" || value === "suspend") {
         setNewStatus(value)
         setOpenFormChangeStatus(true)
      }
      else {
         setIdAccount(value)
         setOpenFormDelete(true)
      }
   }

   const handleConfirmation = () => {
      setStatus(newStatus)
      setOpenFormChangeStatus(false)
   }
   
   const handleDeleteAccount = () => {
      dispatch(deleteAccountById(idAccount))
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
            <MenuItem value={props.id}>
               <Chip color={"error"} size={"medium"} variant={"filled"} label={"Delete"} />
            </MenuItem>
         </Select>

         <ConfirmationDialog open={openFormChangeStatus} onClose={() => setOpenFormChangeStatus(false)} onConfirm={handleConfirmation} title={"Confirm Status Change"} message={"Are you sure you want to change the status?"}/>
         <ConfirmationDialog open={openFormDelete} onClose={() => setOpenFormDelete(false)} onConfirm={handleDeleteAccount} title={"Confirm Delete Account"} message={"Are you sure you want to delete the account?"}/>
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
