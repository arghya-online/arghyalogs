import React from 'react';

const Video = ({ src, caption }) => {
    return (
        <div className="my-6 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
            <video
                className="w-full h-auto"
                controls
                src={src}
            >
                Your browser does not support the video tag.
            </video>
            {caption && (
                <div className="p-3 text-sm text-gray-400 bg-gray-800/50 italic text-center">
                    {caption}
                </div>
            )}
        </div>
    );
};

export default Video;
