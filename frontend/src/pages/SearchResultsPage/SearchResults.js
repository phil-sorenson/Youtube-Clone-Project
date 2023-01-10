//* This page will be shown when User submits a search request from any other page, including the VideoPage (Might look the same as YoutubePage)
    // Difference between YoutubePage is that the videos shown on YoutubePage are hardcoded and the SearchResults will be pulling from the API


// search results Youtube Data API will appear on this page 
// onCLick event to navigate to VideoPage.js

import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
// import HomePage from '../HomePage/HomePage';
// import axios from 'axios';
// import DummyData from '../../DummyData.json'
import YoutubePage from '../YoutubePage/YoutubePage';
import axios from 'axios';

const SearchResults = () => {
    
    const [videoIds, setVideoIds] = useState([]);
    const [user, token] = useAuth();
    const [searchQuery, setSearchQuery] = useState(null);
    const [videos, setVideos] = useState([]);
    const [videoArray, setVideoArray] = useState([]);

    const searchVideos = async () => {
        // Hit Youtube API #1
            // Get Results
        
        
        document.getElementById('search').value= ''
        setVideoIds([])
        console.log('searchQuery', searchQuery)
    }
    console.log(videos)
    console.log(user)

    // const getVideoInfo = async (videoIds) => {
    //     //call Youtube API #
    //     const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=The Office&key=AIzaSyC72FNROnJotKG2wGubIHGav2ZvlS9Zs_c&part=snippet&type=video&maxResults=6`)
    //     console.log(videoIds)
    //     const videoObject = {
    //         title: response.items.snippet.title ,
    //         thumbnailURL: response.items.snippet.thumbnails.default.url
    //     }

    //     const newVideoArray = [...setVideos, videoObject]
    //     setVideoArray(newVideoArray)
    //     console.log('newVideoArray', newVideoArray)
    //     return newVideoArray


    // }

    useEffect(()=> {
        setVideoIds([{videoId:12, name: 'The Office'}])
    }, [token]);

    useEffect(()=> {
        console.log('searching', searchQuery)
    }, [searchQuery]);

    // useEffect(()=> {
    //     getVideoInfo(videoIds)
    // },[videoIds] );
    
    return (  
        <div>
            {!token && (
            <div>
                <h3>Search For Videos</h3>
                <input type='text' id='search' onInput={(event)=> setSearchQuery(event.target.value)} />
                <br />
                <button type='button' onClick={()=> searchVideos()} >Search!</button>
            </div>
            )}
            <YoutubePage videoArray={videoArray}/>
        </div>
    );
}
 
export default SearchResults;


