/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

function VideoIntro() {
  return (
    <>
      <video className="video" loop autoPlay>
        <source
          src="./logo/introVideo2.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
export default VideoIntro;
