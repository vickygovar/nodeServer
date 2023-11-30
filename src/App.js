// src/App.js
import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const videoSource = 'https://pixeldrain.com/api/file/CkZL6pD1?download';
  //const videoSource = 'https://6xc5ppe9ei.e6278d.com/user1342/c751bab1939a2b83020565e1ac242896/EP.1.v1.1080p.mp4?token=9KGCbXs-Wgeq7zz7asQM4A&expires=1701268932&id=3518';

  return (
    <div>
      <h1>Custom Video Player</h1>
      <VideoPlayer videoSource={videoSource} />
    </div>
  );
};

export default App;
