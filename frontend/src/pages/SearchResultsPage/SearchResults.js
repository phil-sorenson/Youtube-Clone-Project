//* This page will be shown when User submits a search request from any other page, including the VideoPage (Might look the same as YoutubePage)
    // Difference between YoutubePage is that the videos shown on YoutubePage are hardcoded and the SearchResults will be pulling from the API


// search results Youtube Data API will appear on this page 
// onCLick event to navigate to VideoPage.js

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SearchResults.css'


const SearchResults = ({results}) => {
    
    const { videoId } = useParams()
    const [user, token] = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [videoArray, setVideoArray] = useState([]);

    
    



    return (  
        <div>
            {/* <div>
                <input type='text' id='search' onInput={(event)=> setSearchQuery(event.target.value)} />
                <br />
                <button type='button' onClick={()=> searchVideos()} >Search!</button>
            </div> */}
            <div className='search-results'>
                <ul>
                    {results.map((result) => {
                        return(
                            <li key={result.id.videoId}>
                                <Link to={`/videopage/${result.id.videoId}`}>
                                    <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title}/>
                                    <p>{result.snippet.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    );
}
 
export default SearchResults;


