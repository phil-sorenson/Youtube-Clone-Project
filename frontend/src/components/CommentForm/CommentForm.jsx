
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const CommentForm = ({ onAddComment }) => {

    const [user, token] = useAuth();
    const {videoId} = useParams()
    const [text, setText] = useState('')
    const [likes, setLikes] = useState(0)
    const [dislikes,setDislikes] = useState(0)
    // const [comment, setComment] = useState({})

    const commentSubmit = async (event) => {
        event.preventDefault();
        let comment = {
            videoId: videoId,
            text: text,
            likes: likes,
            dislikes: dislikes,
        }
        console.log(comment)
        // try {
        //     await axios.post(`http://127.0.0.1:8000/api/comments/`, comment, {
        //         headers: {
        //             Authorization: "Bearer " + token}
        //     });
        // } catch (error) {
        //     console.log(error.message)
        // }
        onAddComment(comment)
    }


    return ( 
        <div>
            <form onSubmit={commentSubmit}>
                <div>
                    <input type='text' placeholder='Add Comment' value={videoId.comment} onChange={(event) => setText(event.target.value)} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default CommentForm;