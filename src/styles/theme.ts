import {createTheme} from "@mui/material"

const Theme = createTheme({
   palette: {
      text: {
         primary: "#374259"
      },
      primary: {
         main: "#5C8984"
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: false
         }
      },

      MuiButton: {
         styleOverrides: {
            root: {
               boxShadow: "none"
            }
         }
      }
   }
})

export default Theme