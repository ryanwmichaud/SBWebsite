import React from 'react';

const YouTubeEmbed = ({ videoId, width, height}) => {
    return (
        <div className="video-responsive">
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;
