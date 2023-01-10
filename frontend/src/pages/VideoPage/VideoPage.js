
// Todo: Grab VideoId based on user OnClick event from SearchResults 
//Todo: Pull videos from API #2 (Related Vids) and show them in grid from in the body of this page
    // Embed a video player to show/play that was searched from SearchResults (<iframe>
//Todo: Add onClick event to for the other related videos on the side panel of the page --> takes you to a different Video_id (backend get function)
//Todo: Create a comments state value and display comments under the selected vid
    // Show a warning to users that they must be logged in to post a comment
         // Each video should have its own comments -- Base comments off of video ID
    // use the && functionality along with users token/name to differentiate logged in user and non logged in user
//Todo: Make video descriptions smaller for user interface
// Todo: Under video description, show comments -- If, User Logged in => 'Enter Comment' box will be avb to them, User NOT Logged in => No comment box (Just comments) (&& functrionality)
    // Have Entered Comment post below previous comments without any page refresh! (OnSubmit preventDefault(), key=index.comments)
    // Will use our built HTTP requests to show the comments and allow user to post comment

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';



const VideoPage = () => {

    const response = async () => {
        comments = await axios.get('http://127.0.0.1:8000/api/comments/M8KmqaJvgpE')
    }; response[comments]
    
    const [user, token] = useAuth();
    const [video, setVideo] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);


    useEffect(() => {

    }, [token])
    console.log(comments)
    console.log('inside homepage')
    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         try {
    //             let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=The Office&key=AIzaSyC72FNROnJotKG2wGubIHGav2ZvlS9Zs_c&part=snippet&type=video&maxResults=6')   
    //             setSearchQuery(response.data.items)
    //             console.log(response.data)
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     fetchVideos();
    // }, [])
    
    return ( 
        <div className='container'>
            <h2>HomePage for {user.username}</h2>
            {token && (
                <h3>Must Be Logged in To Comment!</h3>
            )}
            {videos.length> 0 && comments && comments.map((comment)=> (
                <ul>{comment.userId}: {comment.comment}</ul>
            ))}
       </div>
    );
}
             
    export default VideoPage;

//////////////////////////////////////////!



