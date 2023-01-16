


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

import { KEY } from '../../localKey';
import { Link, useParams } from 'react-router-dom';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import './VideoPage.css'
import CommentForm from '../../components/CommentForm/CommentForm';

const VideoPage = () => {

    const [user, token] = useAuth();
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([])
    const [text, setText] = useState('')
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [comment, setComment] = useState({})
    const { videoId } = useParams()
    

    
        const fetchVideo = async () => {
            try {
                const videoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${videoId}&key=${KEY}`)   
                setVideo(videoResponse.data.items)
                console.log('video Data',videoResponse.data);
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
    
    const handleCommentSubmit = async (comment) => {
        // event.preventDefault();
        // let comment = {
        //     videoId: videoId,
        //     text: text,
        //     likes: likes,
        //     dislikes: dislikes,
        // }
        console.log('created comment', comment)
        try {
            await axios.post(`http://127.0.0.1:8000/api/comments/`, comment, {
                headers: {
                    Authorization: "Bearer " + token}
            });
        } catch (error) {
            console.log(error.message)
        }
        
        fetchComments();
    }

    useEffect(() => {
        fetchVideo();
        fetchComments();
    }, [videoId])


    return ( 
        <div>
            <div className='iframe-div'>
                {/* <h2>{video.snippet.title}</h2> */}
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title='embedded-player'
                    type= "text/html"
                    id="ytplayer"
                    // style={{'height':'360', 'width':'640'}}
                    // title={video.snippet.title} 
                ></iframe>
            </div>
            <div className='comments-section'>
                <div className='comment-container'>
                <h3>Comments:</h3>
                <ul>
                {comments.map((comment)=> {
                return(
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <p> {comment.user.username}</p>
                        <button type='button'>Likes{comment.likes}</button>
                        <button type='button'>Dislikes{comment.dislikes}</button>
                        <br/>
                    </li>
                        )
                    })}
                </ul>
                </div>
                <div className='comment-submit-form'>
                {user ? (
                    <CommentForm onAddComment={handleCommentSubmit} />
                    // <form onSubmit={handleCommentSubmit}>
                    //     <div>
                    //         <input type='text' placeholder='Add Comment' value={videoId.comment} onChange={(event) => {setText(event.target.value)}} />
                    //         <button type='submit'>Submit</button>
                    //     </div>
                    // </form>
                ) : (
                    <p>You Must be Logged-in to Post a Comment</p>
                )}
                </div>
            </div> 
            <div>
                <RelatedVideos videoId={videoId} />
            </div>  
        </div>
    );
}
             
    export default VideoPage;





