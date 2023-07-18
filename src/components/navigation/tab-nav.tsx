import {Box, Tab, Tabs} from "@mui/material"
import {TabPanel} from "../index.ts"
import {ReactNode, SyntheticEvent, useState} from "react"

type TabRouteType = {
   label: ReactNode
   isClosable?: boolean
   element: ReactNode
}

type TabNavProps = {
   routes: TabRouteType[]
   onTabChange?: () => void,
   rightSlot?: ReactNode
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
                        label={route.label}
                        {...getTabAccessibilityProps(index)} />
                  })
               }
            </Tabs>
            {props.rightSlot}
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
         borderColor: 'divider',
         display: "flex",
         alignItems: "center",
         justifyContent: "space-around"
      }
   },
   closable: {
      width: "100%",
      sx: {
         display: "flex",
         alignItems: "center",
         gap: "4px"
      }
   }
}

export default TabNav
export {type TabRouteType}