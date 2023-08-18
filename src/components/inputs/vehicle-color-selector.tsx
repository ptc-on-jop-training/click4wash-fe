import {Box, TextField, Typography, FormHelperText} from "@mui/material"
import {ReactNode, useEffect, useState} from "react"

interface VehicleColorSelectorProps
{
   value?: string | null,
   onChange?: (value: string | null) => void
   error?: ReactNode
}

function VehicleColorSelector(props: VehicleColorSelectorProps)
{
   const csColorIndex = suggestColorList.length

   // TODO - merge these states into one state
   const [value, setValue] = useState<string | null>(props.value ?? null)
   const [selectedIndex, setSelectedIndex] = useState<number | null>()

   useEffect(() => {
      props.onChange && props.onChange(value)
   }, [value])

   const handleSelectSuggestedColor = (value: string, index: number) => {
      setValue(value)
      setSelectedIndex(index)
   }

   const handleOnClickCsColor = (e: any) => {
      setValue(e.target.value)
      setSelectedIndex(csColorIndex)
   }

   const handleSuggestedColorStyle = (index: number) => {
      return (selectedIndex === index ? {...cfn.suggestColor, sx: {...cfn.suggestColor.sx, ...cfn.colorOnSelected.sx}} : cfn.suggestColor)
   }

   const handleCsColorStyle = () => {
      return (selectedIndex === csColorIndex ? {...cfn.csColor, sx: {...cfn.csColor.sx, ...cfn.colorOnSelected.sx}} : cfn.csColor)
   }

   return (
      <Box {...cfn.container}>
         <Typography {...cfn.label}>Color *</Typography>
         <Box {...cfn.selector}>
            <Box {...cfn.suggestColorCont}>
               {suggestColorList.map((color, i) => (
                  <Box
                     onClick={() => handleSelectSuggestedColor(color, i)}
                     bgcolor={color} key={color}
                     {...handleSuggestedColorStyle(i)}/>
               ))}
            </Box>
            <TextField
               label={"Custom"} defaultValue={"#FFFFFF"}
               onClick={handleOnClickCsColor}
               onChange={(e) => setValue(e.target.value)} {...handleCsColorStyle()}/>
         </Box>
         <FormHelperText sx={{color: "#ba000d"}}>{props.error}</FormHelperText>
      </Box>
   )
}

const suggestColorList = [
   "#4682A9",
   "#F11A7B",
   "#0D1282",
   // "#331D2C",
]

const cfn = {

   container: {

   },

   label: {
      sx: {
         marginLeft: "1px",
         marginBottom: "3px"
      },
      fontWeight: "bold"
   },

   selector: {
      display: "grid",
      gridTemplateColumns: "1fr 72px",
      justifyContent: "space-between",
      gap: "10px"
   },

   suggestColorCont: {
      width: "100%",
      display: "flex",
      gap: "10px"
   },
   suggestColor: {
      height: "100%",
      width: "100%",
      maxWidth: "56px",
      borderRadius: "5px",
      padding: "5px",
      border: "0.5px solid #bdbdbd",
      sx: {
         backgroundClip: "content-box",
      }
   },

   csColor:{
      type: "color",
      sx: {
         width: "72px",
         "& .MuiOutlinedInput-input": {
            padding: "3px",
         },

      },
   },

   colorOnSelected: {
      sx: {
         borderColor: "primary.main",
         borderWidth: "2px",
         "& .MuiOutlinedInput-root": {
            "& fieldset": {
               borderColor: "primary.main",
               borderWidth: "2px",
            }
         },
      }
   }
}

export default VehicleColorSelector