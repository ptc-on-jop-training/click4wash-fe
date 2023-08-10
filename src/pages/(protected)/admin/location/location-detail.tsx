import {Box, Button, Typography} from "@mui/material"
import {RemoveAssigner, ConfirmationDialog} from "../../../../components"
import {LocationResponse} from "../../../../services/api"
import {useDispatch} from "react-redux"
import {removeTeamMemberByIndex, setSelectedLocationById} from "../../../../stores/location-stores.ts"
import AssignNewMemberForm from "./assign-new-member-form.tsx"
import {useState} from "react"

interface LocationDetailProps {
    LocationSelected?: LocationResponse,
}

function LocationDetail(props: LocationDetailProps) {

   const dispatch = useDispatch()

   const [isCreateFormOpen, setIsCreateFormOpen] = useState<boolean>(false)

   const [isOpen, setIsOpen] = useState<boolean>(false)

   const [isIndex, setIsIndex] = useState<number>(0)

   const handleClose = () => {
      setIsCreateFormOpen(false)
   }

   const handleOpen = (newIndex: number) => {
      setIsIndex(newIndex)
      setIsOpen(true)
   }

   const handelDelete = () => {
      const id = props.LocationSelected?.id || ''
      if (id) {
         dispatch(removeTeamMemberByIndex({id, isIndex}))
         dispatch(setSelectedLocationById({id: id}))
         setIsOpen(false)
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
            {props.LocationSelected?.teamMemberEmailList?.map((memberName, index) => (
               <RemoveAssigner key={index} label={memberName} onDelete={() => handleOpen(index)}/>
            ))}
            <Box>
               <Button
                  size={"small"} variant={"outlined"}
                  onClick={() => setIsCreateFormOpen(true)}
                  color={"success"}
                  sx={{marginTop: "10px", textTransform: "none"}}>
                  {"assign new member"}
               </Button>
               <AssignNewMemberForm isOpen={isCreateFormOpen} handleClose={handleClose}
                  teamMember={props.LocationSelected?.teamMemberEmailList}
                  id={props.LocationSelected?.id || ''}
               />
               <ConfirmationDialog open={isOpen} onClose={() => setIsOpen(false)} onConfirm={handelDelete}
                  title={'Confirm to remove assigner for location'}
                  message={"Are you sure you want to remove this team member from the location?"}
               />
            </Box>
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