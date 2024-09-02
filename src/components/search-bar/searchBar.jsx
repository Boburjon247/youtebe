import { Search } from '@mui/icons-material'
import { IconButton, Paper } from "@mui/material"
import { colors } from "../../constants/color"
import { useState } from 'react'
import './index.css'
const SearchBar = () => {
  const [value, setvelyu] = useState('');
  const submitHandler = e => {
    e.preventDefault()
    console.log(value);
  }
  return (
    <div>
      <Paper
        className='searchBar'
        component={'form'}
        onSubmit={submitHandler}
        sx={{
          border: `1px solid ${colors.textColor}`,
          pl: 2,
          boxShadow: 'none',
          ml: 5
        }}>
        <input 
          className='inputSearch' 
          type="text" 
          placeholder="Search..." 
          value={value} 
          onChange={e=>setvelyu(e.target.value)} 
          />
        <IconButton className='searchIcon'>
          <Search />
        </IconButton>
      </Paper>
    </div>
  )
}

export default SearchBar