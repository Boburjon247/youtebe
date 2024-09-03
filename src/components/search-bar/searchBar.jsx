import { Search } from '@mui/icons-material'
import { IconButton, Paper } from "@mui/material"
import { colors } from "../../constants/color"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'


const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setvelyu] = useState('');


  const submitHandler = e => {
    e.preventDefault()
    if (value) {
      navigate(`/search/${value}`)
      setvelyu('')
    }
  }
  return (
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
        onChange={e => setvelyu(e.target.value)}
        value={value}
      />
      <IconButton type='submit' className='searchIcon'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar