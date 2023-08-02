import {Box, Button, Typography} from "@mui/material"
import {Chip} from "../../../../components"
import {LocationResponse} from "../../../../services/api"

interface LocationDetailProps {
    LocationSelected?: LocationResponse,
}

function LocationDetail(props: LocationDetailProps) {
   const handelDelete = (index: number) => {
      const updatedTeamMember = props.LocationSelected?.teamMember
         ? [...props.LocationSelected?.teamMember]
         : []

      if (index >= 0 && index < updatedTeamMember.length) {
         updatedTeamMember.splice(index, 1)
      }
      console.log(updatedTeamMember)
   }
   return (
      <Box {...cfn.wrapper}>
         <Typography {...cfn.title}> Location detail</Typography>
         <Box>
            <Typography variant="body1" sx={{ marginTop: 3, marginBottom: 3 }}>
                 Assigned Team Members for <b>{props.LocationSelected?.name}</b>:
            </Typography>
         </Box>
         <Box {...cfn.mainContent}>
            {props.LocationSelected?.teamMember?.map((memberName, index) => (
               <Chip key={index} label={memberName} onDelete={() => handelDelete(index)} />
            ))}
            <>
               <Button
                  size={"small"} variant={"outlined"}
                  color={"success"}
                  sx={{marginTop: "10px", textTransform: "none"}}>
                  {"assign new member"}</Button>
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