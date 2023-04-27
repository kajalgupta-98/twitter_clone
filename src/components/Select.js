import React from 'react'
import {InputLabel, Select, MenuItem, FormControl} from "@mui/material"


function SelectComponent({label, Menuoptions,value, onchange}) {
    
    
  return (
    <div >
     <FormControl sx={{ m: 1, minWidth: 90 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onchange}
        autoWidth
      >
        {Menuoptions && Menuoptions.map((item)=>(
             <MenuItem value={item}>
             {item}
             </MenuItem>
             
        ))}
       
    
   
  </Select>
  </FormControl>
    </div>
  )
}


export default SelectComponent
