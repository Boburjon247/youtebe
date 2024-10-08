import './videocard.css'
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { colors } from '../../constants/color'
import moment from 'moment'
import { CheckCircle } from "@mui/icons-material";
import {Link} from 'react-router-dom'

const VideoCard = ({ video }) => {
    return (
        <Card
            className="card"
            sx={{ width: { xs: '100%', sm: '360px', md: '355px' } }}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet.title}
                    sx={{
                        width: { xs: '100%', sm: '360px', md: '355px' },
                        height: '180px',
                    }}
                />
            </Link>
            <CardContent className='cardContent'>
                <>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{ opacity: '0.4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        {video?.snippet?.title?.slice(0, 35)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: '0.6' }}>
                        {video?.snippet?.description?.slice(0, 35)}
                    </Typography>
                </Link>
                </>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignContent={'center'} gap={'5px'}>
                        <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                        <Typography variant="subtitle2" color="orange">
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{ fontSize: '12px', color: 'orange', ml: '5px' }} />
                        </Typography>
                    </Stack>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard