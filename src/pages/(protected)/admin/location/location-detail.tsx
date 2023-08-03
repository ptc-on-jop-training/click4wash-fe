import {Box, Button, Typography} from "@mui/material"
import {Chip} from "../../../../components"
import {LocationResponse} from "../../../../services/api"
import {useDispatch} from "react-redux"
import {removeTeamMemberByIndex, setSelectedLocationById} from "../../../../stores/location-store.ts"
import AssignNewMemberForm from "./assign-new-member-form.tsx"
import {useState} from "react"
interface LocationDetailProps {
    LocationSelected?: LocationResponse,
}

function LocationDetail(props: LocationDetailProps) {
   const dispatch = useDispatch()
   const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false)

   const handleClose = () => {
      setIsCreateFormOpen(false)
   }
   const handelDelete = (index: number) => {
      const id = props.LocationSelected?.id || ''
      if (id) {
         dispatch(removeTeamMemberByIndex({id, index}))
         dispatch(setSelectedLocationById({ id: id }))
      }
   }
   return (
      <Box {...cfn.wrapper}>
         <Typography {...cfn.title}> Location detail</Typography>
         <Box>
            <Typography variant="body1" sx={{marginTop: 3, marginBottom: 3}}>
                    Assigned Team Members for <b>{props.LocationSelected?.name}</b>:
            </Typography>
         </Box>
         <Box {...cfn.mainContent}>
            {props.LocationSelected?.teamMember?.map((memberName, index) => (
               <Chip key={index} label={memberName} onDelete={() => handelDelete(index)}/>
            ))}
            <>
               <Button
                  size={"small"} variant={"outlined"}
                  onClick={() => setIsCreateFormOpen(true)}
                  color={"success"}
                  sx={{marginTop: "10px", textTransform: "none"}}>
                  {"assign new member"}</Button>
               <AssignNewMemberForm isOpen={isCreateFormOpen} handleClose={handleClose} teamMember={props.LocationSelected?.teamMember} id={props.LocationSelected?.id || ''} />
            </>

         </Box>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         padding: 3
      }
   },
   mainContent: {
      sx: {
         borderLeft: 2,
         borderLeftColor: "#d1d5db",
         paddingLeft: 2,
         display: "flex",
         flexDirection: "column",
         gap: 2,
         alignItems: "flex-start",
         marginTop: 3,

      }
   },
   title: {
      sx: {
         fontWeight: 'bold',
         textTransform: 'uppercase',
         width: '100%',
         textAlign: 'center',
         fontSize: '22px'
      }
   }
}
export default LocationDetail