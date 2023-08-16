import {Box} from '@mui/material'
import {useTranslation} from "react-i18next"

const EmptySide = () => {
   const [t] = useTranslation('trans')

   return (
      <Box sx={cfn.wrapper}>
         <p style={cfn.emptyHeading}>{t("admin.Layout.LeftSideLayout.emptySide.emptyHeading")}</p>
         <p style={cfn.emptyText}>{t("admin.Layout.LeftSideLayout.emptySide.emptyText")}</p>
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
      margin:0,
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#888888',
   },
   emptyText: {
      margin:0,
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#888888',
      textAlign: "center" as const,
   },
}

export default EmptySide