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
      <Container {...cfn.introductionPage}>

         <Button {...cfn.optionBtn} onClick={handleClickSignIn}>
            <Typography {...cfn.optionBtnFont}>
               Sign In
            </Typography>
         </Button>

         <Button {...cfn.optionBtn} onClick={handleClickSignUp}>
            <Typography {...cfn.optionBtnFont}>
               Sign Up
            </Typography>
         </Button>

      </Container>
   )
}


const cfn = {

   introductionPage: {
      sx: {
         // height: "100vh",
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