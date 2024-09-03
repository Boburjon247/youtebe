import {CircularProgress,Box,Stack } from '@mui/material';

export default function Loader() {
    return (
        <Box sx={{ minHeight: '90vh' }}>
            <Stack direction={'row'} justifyContent={'center'} alignContent={'center'} height={'80vh'}>
                <CircularProgress />
            </Stack>
        </Box>
    );
}