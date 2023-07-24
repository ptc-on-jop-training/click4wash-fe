import {Box} from '@mui/material'

const EmptySide = () => {
   return (
      <Box sx={cfn.wrapper}>
         <p style={cfn.emptyHeading}>Nothing To Show</p>
         <p style={cfn.emptyText}>Select something to see the detail</p>
      </Box>
   )
}

const cfn = {
   wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
   },
   emptyHeading: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#888888',
   },
   emptyText: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#888888',
   },
}

export default EmptySide
