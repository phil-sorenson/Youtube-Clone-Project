//* Main Page that contains descendants for two other pages -- SearchResults and VideoPage (React Router demo for connecting them)
// Todo: Connect the two descendants (SearchResults & VideoPage) using React-Router-dom
    // Search Results should remain on YoutubePage? and the VideoPage will be linked to go to a diff page entirely
// Todo: Create functionality to return Videos based on SearchResults from user
// Todo: ❓We want user to open up to a page with videos loaded by default -- DO NOT want just an empty page (Hard Code related video data ) ❓

// Todo: use the UseNav hook in my handleSearch function to route the user to the searchResults page after using the Search Box

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

const YoutubePage = () => {

    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [videos, setVideos] = useState([])
    
    
    useEffect(() => {
        
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=The Office&key=AIzaSyC72FNROnJotKG2wGubIHGav2ZvlS9Zs_c&part=snippet&type=video&maxResults=6`)
                setVideos(response.data.items)
            } catch (error) {
                console.log(error.message)
            }
        };
        fetchVideos();
    },[])
    
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=AIzaSyC72FNROnJotKG2wGubIHGav2ZvlS9Zs_c&part=snippet&type=video&maxResults=6`)
            setSearchResults(response.data.items)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}                
                />
                <br />
                <button type='submit'>Search</button>
            </form>  
            <div>
                <h2>Featured Videos</h2>
                <ul>
                    {videos.map((video) => {
                        return (
                        <li key={video.id.videoId}>
                            <Link to={`/videopage/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                                <p>{video.snippet.title}</p>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
     );
};
export default YoutubePage;










