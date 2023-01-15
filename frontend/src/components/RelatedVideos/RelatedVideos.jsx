import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";
import './RelatedVideos.css'


const RelatedVideos = () => {

    const [relatedVideos, setRelatedVideos] = useState([]);
    const { videoId } = useParams()
    
    useEffect(() => {
        const fetchRelatedVideos = async () => {
        try {
            if(videoId) {
                const relatedVideosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&key=${KEY}&part=snippet`)
                setRelatedVideos(relatedVideosResponse.data)
                console.log('related Video', relatedVideosResponse.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
       fetchRelatedVideos(); 
    }, [videoId])
    


    return ( 
        <div>
            { videoId && (
                <>
            <h3>Related Videos</h3>
            <div className="related-videos-parent">
                <ul>
                    {relatedVideos?.items?.map((video) => {
                            return (
                        <li key={video.id.videoId}>
                            <Link to={`/videopage/${video.id.videoId}`}>
                                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                                <p style={{'fontSize':'.25rem'}}>{video.snippet.title}</p>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
            </>
            )}
        </div>
     );
}
 
export default RelatedVideos;