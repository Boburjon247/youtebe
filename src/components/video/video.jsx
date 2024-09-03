import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service";
import ReactPlayer from 'react-player'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";
import Loader from "../loader/loader";


const Video = () => {
    const [videoDe, setVideoD] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getdata = async () => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideoD(data.items[0])
                const reletedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)

            } catch (error) {
                console.log(error);
            }
        }
        getdata()
    }, [id])   
    
    if(!videoDe?.snippet) return <Loader/>
    
    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}}}>
                <Box sx={{width:{sx:'100%', md:'75%'}}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="reactPlayer" controls />
                    {videoDe?.snippet?.tags?.map((item, idx) => (
                        <Chip
                            label={item}
                            key={idx}
                            sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
                            deleteIcon={<Tag />}
                            onDelete={() => { }}
                            variant="outlined"
                        />
                    ))}
                    <Typography variant="h5" fontWeight={'bold'} p={2}>
                            {videoDe?.snippet?.title}
                    </Typography>
                    <Typography variant="subtitle2" p={2} sx={{opacity:'.7'}} >
                            {videoDe?.snippet?.description}
                    </Typography>
                    <Stack direction={'row'} gap={'20px'} alignItems={'center'} py={1} px={2}>
                        <Stack sx={{opacity:'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                            <Visibility/>
                            {parseInt(videoDe?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{opacity:'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                            <FavoriteOutlined/>
                            {parseInt(videoDe?.statistics?.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{opacity:'.7'}} direction={'row'} alignItems={'center'} gap={'3px'}>
                            <MarkChatRead/>
                            {parseInt(videoDe?.statistics?.commentCount).toLocaleString()} comment
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'} gap={'5px'} marginTop={'5px'} marginLeft={'10px'} direction={'row'}>
                        <Avatar 
                            alt={videoDe?.snippet?.channelTitle}
                            src={videoDe?.snippet?.thumbnails?.default.url}
                            />
                        <Typography variant="subtitle2" color="gray">
                                {videoDe?.snippet?.channelTitle}
                                <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                        </Typography>
                    </Stack>

                </Box>
                <Box sx={{width:{sx:'100%', md:'25%'}}}>Video 2</Box>
            </Box>
        </Box>
    )
}

export default Video