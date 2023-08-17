import {MouseEvent, useState} from "react"
import { Menu, MenuItem, IconButton, Fade, ListItemText } from "@mui/material"
import { ChangeCircle, MoreVert } from "@mui/icons-material"
import { useAuth0 } from "@auth0/auth0-react"
import {useTranslation} from "react-i18next"

const UserOptionMenu = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const {logout} = useAuth0()

   const [t,i18n] = useTranslation('trans')
   const handleClick=(lang :string)=>{
      i18n.changeLanguage(lang)
   }
   const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <IconButton onClick={handleMenuOpen}>
            <MoreVert />
         </IconButton>
         <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} TransitionComponent={Fade}>
            <MenuItem>
               <ListItemText onClick={() => logout()}>{t("admin.Layout.LeftSideLayout.menuOption.Logout")}</ListItemText>
            </MenuItem>
            <MenuItem>
               <ChangeCircle />
               <ListItemText
                  onClick={() => handleClick(i18n.language === "en" ? "fr" : "en")}
               >
                  {t("admin.Layout.LeftSideLayout.menuOption.Switch")}
               </ListItemText>
            </MenuItem>
         </Menu>
      </>
   )
}

export default UserOptionMenu
