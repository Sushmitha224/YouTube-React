import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => (
    <BrowserRouter>
        <Box sx= {{ backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
<<<<<<< HEAD
                <Route path="/YouTube-React" exact element={<Feed />} />
=======
                <Route path="/YouTube-React/" exact element={<Feed />} />
>>>>>>> 01039d2 (Updated changes)
                <Route path="/video/:id" element={<VideoDetail />}/>
                <Route path="/channel/:id" element={<ChannelDetail />}/>
                <Route path="/search/:searchTerm" element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App