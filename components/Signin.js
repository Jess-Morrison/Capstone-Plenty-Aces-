import React from 'react';
// import Link from 'next/link';
// import Button from 'react-bootstrap/Button';
import VideoIntro from '../public/logo/video';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div className="videoDiv" style={{ width: '290px', height: '400px' }}>
        <VideoIntro />
      </div>
      <div className="welcomeSignIn">
        <h1 style={{ margin: '10px' }}>Hello there!</h1>
        <p>Click the button below to login!</p>
        <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
          Sign In
        </button>
        {/* <Link href="/newUser" passHref>
          <Button variant="primary" className="viewCardBtn">VIEW</Button>
        </Link> */}
        {/* <Link href="/newUser" passHref> */}
        {/* <Button variant="info" className="newUserBtn" onClick="/newUser"> */}
        {/* <a className="nav-link"> */}
        {/* New User? */}
        {/* </a> */}
        {/* </Button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Signin;
