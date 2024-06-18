'use client'
import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
const DropDwon = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div className=''>
        <div>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        </div>
   
    </div>
  )
}

export default DropDwon