import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { KEY } from "../localKey";
import { Link } from "react-router-dom";



const RelatedVideos = () => {

    const [relatedVideos, setRelatedVideos] = useState([]);
    const { videoId } = useParams()
    
    useEffect(() => {
        const fetchRelatedVideos = async () => {
        try {
            const relatedVideosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&key=${KEY}&part=snippet`)
            setRelatedVideos(relatedVideosResponse.data)
            console.log('related Video', relatedVideosResponse.data)
        } catch (error) {
            console.log(error.message)
        }
       fetchRelatedVideos(); 
    }
    }, [videoId])
    


    return ( 
        <div>
            <h2>Related Videos</h2>
            <ul>
                {relatedVideos.items.map((video) => {
                    <li key={video.id.videoId}>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                            <p>{video.snippet.title}</p>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
     );
}
 
export default RelatedVideos;