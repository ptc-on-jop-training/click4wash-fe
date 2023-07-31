import {useSelector} from "react-redux"
import {RootStateType} from "../../../../stores"
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import {useState} from "react"

type AssignTeamMemberProps = {
    params: any;
};

function AssignTeamMember(props: AssignTeamMemberProps) {

   const [teamMember, setTeamMember] = useState<string>(props.params.row.teamMember || "")

   const accountList = useSelector((state: RootStateType) => state.account.accountList)

   const teamMembers = accountList?.filter(user => user.role === "team-member").map(user => user.username) ?? []
   
   const handleChange = (event: SelectChangeEvent) => {
      setTeamMember(event.target.value)
   }

   return (
      <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
         <Select
            id="teamMember" required fullWidth margin={"dense"}
            value={teamMember}
            onChange={handleChange}
         >
            <MenuItem value="" {...cfn.select}>
               <>None</>
            </MenuItem>
            {teamMembers.map((option: string) => (
               <MenuItem key={option} value={option} {...cfn.select}>
                  {option}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   )
}

const cfn = {
   select: {
      sx: {
         borderRadius: 8,
         margin: 1,
         '&:hover': {
            backgroundColor: '#f0f0f0',
         },
      }
   }
}


export default AssignTeamMember