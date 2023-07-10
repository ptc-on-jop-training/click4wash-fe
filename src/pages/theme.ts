import {createTheme} from "@mui/material"

const Theme = createTheme({
   components: {

      MuiContainer: {
         defaultProps: {
            maxWidth: false
         }
      },

      MuiButton: {
         defaultProps: {
            size: "large"
         },
         styleOverrides: {
            root: {
               boxShadow: "none",
               borderRadius: 30,
            },
            sizeLarge: {
               padding: 13
            }
         }
      }

   }
})

export default Theme