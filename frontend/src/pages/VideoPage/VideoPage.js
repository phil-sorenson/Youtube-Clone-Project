
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

//! https://www.youtube.com/embed/VIDEO_ID

//!  <iframe id="ytplayer" type="text/html" width="640" height="360"
//!   src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
//!  frameborder="0"></iframe> 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

import { KEY } from '../../localKey';
import { Link, useParams } from 'react-router-dom';
// import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';


const VideoPage = () => {

    const [user, token] = useAuth();
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([])
    const [relatedVideos, setRelatedVideos] = useState([]);
    const { videoId } = useParams()


    const fetchVideo = async () => {
        try {
            const videoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoId}&key=${KEY}`)   
            setVideo(videoResponse.data)
            console.log("video data",videoResponse.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const fetchComments = async () => {
        try {
            const commentsResponse = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`)
            setComments(commentsResponse.data)
            console.log('comments', commentsResponse.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const fetchRelatedVideos = async () => {
        try {
            const relatedVideosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&key=${KEY}&part=snippet`)
            setRelatedVideos(relatedVideosResponse.data)
            console.log('related Video', relatedVideosResponse.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchVideo();
        fetchComments();
        fetchRelatedVideos();
    }, [videoId])
   
  



    const handleCommentSubmit = async (event, comment) => {
        event.preventDefault();
        
        try {
            await axios.post(`http://127.0.0.1:8000/api/comments`, comment, {
                headers: {
                    Authorization: "Bearer " + token}
            });
        } catch (error) {
            console.log(error.message)
        }
    }


    return ( 
        <div>
            {/* {console.log(videoId)}
            {console.log('relatedVideos', relatedVideos.video.id.videoId)}
            {console.log('comments', comments)}
             {video && (
                <div>
                    <h2>{video.snippet.title}</h2>
                <div>
                    <iframe title={'player'} type='text/html'  style={{'height':'360', 'width':'640'}} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
                </div>
                </div>
            )}
                <div>
                    <h3>Comments</h3>
                    <ul>
                    {comments.length > 0 && comments.map((comment)=> {
                    return(
                        <li key={comment.id}>
                            <p>{comment.text}</p>
                            <p>Comment By: {comment.user.username}</p>
                        </li>
                        )
                    })}
                </ul>
                {user ? (
                    <form onSubmit={handleCommentSubmit}>
                        <input type='text' placeholder='Add Comment' />
                        <button type='submit'>Submit</button>
                    </form>
                ) : (
                    <p>You Must be Logged-in to Post a Comment</p>
                )}
            </div>
            <div>
                <h2>Related Videos</h2>
                <ul>
                    {relatedVideos.items.map((video)=> {
                        return(
                            <li key={video.id.videoId}>
                                <Link type={`/videopage/${video.id.videoId}`}>
                                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                                    <p style={{'fontSize':'.25rem'}}>{video.snippet.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>  */}
        </div>
    );
}
             
    export default VideoPage;





