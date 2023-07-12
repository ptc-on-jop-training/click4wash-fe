import {Button, Container, Typography} from "@mui/material"
import {useAuth0} from "@auth0/auth0-react"

function IntroductionPage()
{
   const {loginWithRedirect} = useAuth0()

   const handleClickSignIn = () => {
      void loginWithRedirect()
   }

   const handleClickSignUp = () => {
      void loginWithRedirect({authorizationParams: {screen_hint: "signup"}})
   }

   return (
      <Container {...styles.introductionPage}>
         <Button {...styles.optionBtn} onClick={handleClickSignIn}>
            <Typography {...styles.optionBtnFont}>
               Sign In
            </Typography>
         </Button>

         <Button {...styles.optionBtn} onClick={handleClickSignUp}>
            <Typography {...styles.optionBtnFont}>
               Sign Up
            </Typography>
         </Button>

      </Container>
   )
}


const styles = {
   introductionPage: {
      sx: {
         height: "100vh",
         display: "flex",
         flexDirection: "column",
         justifyContent: "end",
         paddingBottom: 7,
         gap: 1.5
      },
   },

   optionBtn: {
      variant: "contained" as const,
   },
   optionBtnFont: {
      fontWeight: "bold" as const
   }

}

export default IntroductionPage