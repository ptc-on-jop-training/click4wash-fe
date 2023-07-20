import {createTheme} from "@mui/material";

const Theme = createTheme({
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: false
         }
      },
   }
})

export default Theme