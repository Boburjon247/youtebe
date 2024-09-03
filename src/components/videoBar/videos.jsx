import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard, Loader } from '..'

const Videos = ({ videos }) => {
  if(!videos.length) return <Loader/>
  return (
    <Stack
      direction={'row'}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'start',
        gap: '10px'
      }}
    >
      {videos.map(item => (
        <Box key={item?.id?.videoId}>
          {(item?.id?.videoId || item?.id?.videoId != 'undefined') && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos