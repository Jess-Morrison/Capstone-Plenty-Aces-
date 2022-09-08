/* eslint-disable @next/next/no-img-element */
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

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
      <div className="image">
        <img src="/../logo/logo.png" width="700px" height="700px" alt="" />
      </div>
      <h1>Welcome {user.displayName}! </h1>
      <p>Click the button below to logout!</p>
      <button style={{ 'background-color': '#84190B' }} className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
