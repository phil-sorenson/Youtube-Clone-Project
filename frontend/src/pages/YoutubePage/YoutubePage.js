//* Main Page that contains descendants for two other pages -- SearchResults and VideoPage (React Router demo for connecting them)
// Todo: Connect the two descendants (SearchResults & VideoPage) using React-Router-dom
    // Search Results should remain on YoutubePage? and the VideoPage will be linked to go to a diff page entirely
// Todo: Create functionality to return Videos based on SearchResults from user
// Todo: ❓We want user to open up to a page with videos loaded by default -- DO NOT want just an empty page (Hard Code related video data ) ❓

// Todo: use the UseNav hook in my handleSearch function to route the user to the searchResults page after using the Search Box

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { KEY } from '../../localKey';
// import useAuth from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
import './YoutubePage.css'

const YoutubePage = () => {
    const [user, token] = useAuth();
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    
    
    useEffect(() => {
        
        const videoArray = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=The Office&key=${KEY}&part=snippet&type=video&maxResults=2`)
                setVideos(response.data.items)
            } catch (error) {
                console.log(error.message)
            }
        };
        videoArray();
    },[])
    
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${KEY}&part=snippet&type=video&maxResults=6`)
            setSearchResults(response.data.items)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container'>
            <div className='form-div'>
            <h1>Home Page for {user.username}</h1>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}                
                />
                <br />
                <button type='submit'>Search</button>
            </form>
            </div>  
            <div>
                <h2>Featured Videos</h2>
            </div>
                <div className='videos'>
                    <ul>
                    {videos.map((video) => {
                        return (
                        <div style={{margin:'.5rem'}}>
                            <li key={video.id.videoId}>
                                <Link to={`/videopage/${video.id.videoId}`}>
                                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                                    <p style={{'fontSize':'.25rem'}}>{video.snippet.title}</p>
                                </Link>
                            </li>
                        </div>
                        );
                    })}
                    </ul>
                </div>
           
        </div>
     );
};
export default YoutubePage;










