import {MouseEvent, useState} from "react"
import {Menu, MenuItem, IconButton, Fade, ListItemText} from "@mui/material"
import {ChangeCircle, MoreVert, Language} from "@mui/icons-material"
import {useAuth0} from "@auth0/auth0-react"
import {useTranslation} from "react-i18next"

const UserOptionMenu = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const openChildMenu = Boolean(subMenuAnchorEl)

   const {logout} = useAuth0()

   const [t, i18n] = useTranslation('trans')

   const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   const handleSubMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setSubMenuAnchorEl(event.currentTarget)
   }

   const handleSubMenuClose = () => {
      setSubMenuAnchorEl(null)
   }

   const handleClick = (lang: string) => {
      i18n.changeLanguage(lang)
   }

   return (
      <>
         <IconButton onClick={handleMenuOpen}>
            <MoreVert/>
         </IconButton>
         <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} TransitionComponent={Fade}>
            <MenuItem>
               <ListItemText onClick={() => logout()}>
                  {t("admin.Layout.LeftSideLayout.menuOption.Logout")}
               </ListItemText>
            </MenuItem>
            <MenuItem onClick={handleSubMenuOpen}>
               <ChangeCircle/>
               <ListItemText>
                  {t("admin.Layout.LeftSideLayout.menuOption.Switch")}
               </ListItemText>
            </MenuItem>
         </Menu>
         <Menu
            anchorEl={subMenuAnchorEl}
            open={openChildMenu}
            onClose={handleSubMenuClose}
            TransitionComponent={Fade}
         >
            <MenuItem {...cfn.chooseLanguage}>
               <Language/>
               <ListItemText
                  onClick={() => handleClick("en")}
               >
                  {t("admin.Layout.LeftSideLayout.changeLanguageOption.english")}
               </ListItemText>
            </MenuItem>

            <MenuItem  {...cfn.chooseLanguage}>
               <Language/>
               <ListItemText
                  onClick={() => handleClick("fr")}
               >
                  {t("admin.Layout.LeftSideLayout.changeLanguageOption.french")}
               </ListItemText>
            </MenuItem>
         </Menu>
      </>
   )
}
const cfn = {
   chooseLanguage: {
      sx: {
         display: "flex",
         flexDirection: "row",
         gap: 1,
         justifyContent: "space-between",
         alignItems: "center",

      }
   }
}

export default UserOptionMenu

