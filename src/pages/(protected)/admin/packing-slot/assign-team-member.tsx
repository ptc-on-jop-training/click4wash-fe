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
      <FormControl variant="outlined" {...cfn.formControl}>
         <Select
            id="teamMember" required fullWidth margin={"dense"}
            value={teamMember}
            onChange={handleChange}
            sx={{color:'#E06700'}}
         >
            <MenuItem value="" {...cfn.menuItem}>
               <>None</>
            </MenuItem>
            {teamMembers.map((option: string) => (
               <MenuItem key={option} value={option} {...cfn.menuItem}>
                  {option}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   )
}

const cfn = {
   formControl:{
      sx: {
         m: 1, 
         maxWidth: '100%',
         minWidth: '50%',
         boxShadow: "none",
         ".MuiOutlinedInput-notchedOutline": {border: 0},
         "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {border: 0,},
         "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {border: 0,},
      }
   },
   menuItem: {
      sx: {
         borderRadius: 8,
         margin: 1,
         '&:hover': {
            backgroundColor: '#f0f0f0',
         },
         color:"#407E2D"
      }
   }
}

export default AssignTeamMember