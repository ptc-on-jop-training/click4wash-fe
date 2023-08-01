import {Box} from "@mui/material"
import {Email} from "@mui/icons-material"
import {UserOptionMenu} from "../../../components"

function LeftSide() {
   return (
      <Box {...cfn.wrapper}>
         <Box>
            <Box {...cfn.topSection}>
               <p style={cfn.userName}>Ho Thi Nguyet</p>
            </Box>
            <p style={cfn.userEmail}>nguyet123@gmail.com <Email fontSize={"small"}/></p>
         </Box>
         <UserOptionMenu/>
      </Box>
   )
}

const cfn = {
   wrapper: {
      sx: {
         borderTop: "1px solid #c7c3c3",
         paddingLeft: "1.25rem",
         paddingRight: "1.25rem",
         paddingTop: "1rem",
         paddingBottom: " 1rem",
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
      }
   },
   topSection: {
      sx: {
         display: "flex",
         alignItems: "center",
      }
   },
   userName: {
      margin: '0px',
      fontWeight: 'bold',
   },
   userEmail: {
      margin: '0px',
      display: 'flex',
      gap: "0.5rem",
   }
}

export default LeftSide