import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import { Box, Container, Typography } from '@mui/material';
import {colors} from '../../constants/color'
import { Videos } from '../'
const Search = () => {
    const [videos,setVideo] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const getData = async () =>{
            try {
                const data = await ApiService.fetching(`search?part=snippet&q=${id}`)                
                setVideo(data.items)
            } catch (error) {
                
            }
        }
        getData();
    },[id])         
    return (
        <Box p={2} sx={{height:'90vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant='h4' fontWeight={'bold'} mb={2}>
                        Search results for <span style={{color:colors.borderColor}}>{id}</span> video
                </Typography>
                <Videos videos={videos} />
            </Container>

        </Box>
    )
}

export default Search