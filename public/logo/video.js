/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

// import logoMP4 from '../logos/lyrics.mp4';

function VideoIntro() {
  return (
    <>
      <video className="video" loop autoPlay>
        <source
          src="./logo/introVideo.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
export default VideoIntro;
