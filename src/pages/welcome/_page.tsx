import {useAuth0} from "@auth0/auth0-react"
import {Button, Container, Stack} from "@mui/material"

function WelcomePage()
{
   const {loginWithRedirect} = useAuth0()

   return (
      <Container {...cfn.container}>
         <Stack {...cfn.authBtnContainer}>
            <Button {...cfn.logInBtn} onClick={() => loginWithRedirect()}>Log In</Button>
            <Button {...cfn.signUpBtn} onClick={() => loginWithRedirect({authorizationParams: {screen_hint: "signup"}})}>Sign Up</Button>
         </Stack>
      </Container>
   )
}

const cfn = {
   container: {

   },

   authBtnContainer: {
      spacing: 1.5
   },

   logInBtn: {
      variant: "contained" as const,
      size: "large" as const
   },

   signUpBtn: {
      variant: "contained" as const,
      size: "large" as const
   }
}

export default WelcomePage