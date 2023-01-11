import React from 'react';


const YoutubeEmbed = ({ videoId }) => {
    
    return ( 
        <div className='player'>
            <iframe
             width='640'
             height='360'
             src={`https://www.youtube.com/embed/${videoId}`}
             title='embedded-youtube'
             
            />

            
        </div>
     );
}
 
export default YoutubeEmbed;
