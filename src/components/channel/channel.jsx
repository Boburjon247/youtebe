import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'
import { Box, Container } from '@mui/material'
import { ChannelCard,Videos } from '../'

const Channel = () => {
  const [channelDeteley, setchannelDeteley] = useState([])
  const [videos, setVideo] = useState([]);
  const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannel = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setchannelDeteley(dataChannel.items[0])

        const dataVideo = await ApiService.fetching(`search?channel=${id}&part=snippet%2Cid&order=date`)
        setVideo(dataVideo?.items)

      } catch (error) {
        console.log(error);

      }
    }
    getData()
  }, [id])



  return (
    <Box maxHeight={'95vh'}>
      <Box>
          <Box width={'100%'} height={'250px'} zIndex={'10'} sx={{
              backgroundImage:
              `url(${channelDeteley?.brandingSettings?.image?.bannerExternalUrl})`,
              backgroundPosition:'center',
              backgroundSize:'cover ',
              objectFit:'cover',
              backgroundRepeat:'no-repeat'
              }}>

            </Box>
          <ChannelCard video={channelDeteley} marginTop={'-100px'} />
      </Box>
      <Container maxWidth={'90%'}>
            <Videos  videos={videos} />
      </Container>
    </Box>
  )
}

export default Channel