// src/VideoPlayer.js
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const VideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        width="600"
        height="400"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
