import {Box, Tab, Tabs, IconButton} from "@mui/material"
import {Close} from '@mui/icons-material'
import {TabPanel} from "../index.ts"
import {ReactNode, SyntheticEvent, useState} from "react"
import {MouseEvent} from "react"

type TabRouteType = {
   label: ReactNode
   isClosable?: boolean
   element: ReactNode
}

type TabNavProps = {
   routes: TabRouteType[]
   onTabChange?: () => void
}

function TabNav(props: TabNavProps) {
   const [tab, setTab] = useState(0)
   const handleChange = (_event: SyntheticEvent, newValue: number) => {
      props.onTabChange && props.onTabChange()
      setTab(newValue)
   }
   return (
      <>
         <Box {...cfn.tabWrapper}>
            <Tabs scrollButtons="auto" value={tab} onChange={handleChange}>
               {
                  props.routes.map((route, index) => {
                     return <Tab
                        key={index}
                        label={
                           route.isClosable
                              ? <ClosableLabel label={route.label} tabNum={index}/>
                              : route.label
                        }
                        {...getTabAccessibilityProps(index)} />
                  })
               }
            </Tabs>
         </Box>
         {
            props.routes.map((route, index) => {
               return <TabPanel key={index} value={tab} index={index}>
                  <>{route.element}</>
               </TabPanel>
            })
         }
      </>
   )
}

type ClosableLabelProps = {
   tabNum: number
   handleClose?: (event: MouseEvent<HTMLDivElement>, tab: number) => void
   label: ReactNode
}

function ClosableLabel(props: ClosableLabelProps) {
   return (
      <Box {...cfn.closable}>
         <Box component="span">{props.label}</Box>
         <IconButton
            sx={{padding: 0}}
            size="small"
            component="div"
            onClick={(event) => props.handleClose?.(event, props.tabNum)}
         >
            <Close fontSize="small"/>
         </IconButton>
      </Box>
   )
}

function getTabAccessibilityProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

const cfn = {
   tabWrapper: {
      sx: {
         borderBottom: 1,
         borderColor: 'divider'
      }
   },
   closable: {
      width:"100%",
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "4px"
      }
   }
}

export default TabNav
export {type TabRouteType}