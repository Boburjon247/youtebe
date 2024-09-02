import './main.css'
import { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from "@mui/material"
import { ApiService } from '../../service/api.service'
import { Ceategory, Videos } from '../'



const Main = () => {
  const [selectetCatigorya, setselectetCatigorya] = useState("New")

  const [videos, setVideos] = useState([])

  const selectHendel = carigory => setselectetCatigorya(carigory)

  useEffect(() => {

    const getData = async()=>{
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectetCatigorya}`)
        setVideos(data.items)
        
      } catch (error) {
        console.log(error);
        
      }
    }
      getData()
  }, [selectetCatigorya])


  return (
    <Stack>
      <Ceategory
        selectHendel={selectHendel}
        selectetCatigorya={selectetCatigorya}
      />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant='h5' fontWeight={"bold"} mb={2}>
            {selectetCatigorya} <span>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
