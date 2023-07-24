import {createTheme} from "@mui/material"

const Theme = createTheme({
   palette: {
      text: {
         primary: "#374259"
      },
      primary: {
         main: "#176B87"
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
               boxShadow: "none",
               fontWeight: "bold"
            }
         }
      }
   }
})

export default Theme