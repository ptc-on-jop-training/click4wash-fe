import {Box} from "@mui/material"

function PageLoading()
{
   return (
      <Box sx={{
         height: "100vh",
         display: "flex",
         alignItems: "center",
         justifyContent: "center"
      }}>
         <div>loading...</div>
      </Box>
   )
}

export default PageLoading