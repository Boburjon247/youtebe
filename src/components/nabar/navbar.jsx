import './navbar.css';
import { Stack, Box, TextField } from '@mui/material'
import { logo } from '../../constants'
import { colors } from '../../constants/color'
import { Link } from 'react-router-dom'
import {SearchBar} from '../' 

const Navbar = () => {
    return (
        <Stack
            className='Navbar'
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'2'}
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 998,
                background: colors.primary

    }}>

            <Link to={'/'}>
                <p className='logo'>{logo}</p>
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    )
}

export default Navbar