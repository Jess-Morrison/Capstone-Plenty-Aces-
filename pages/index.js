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
        // maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <div className="image" style={{ marginTop: '200px' }}>
        <img src="/../logo/newLogo.png" width="700px" height="700px" alt="" />
      </div>
      <h1 style={{ fontSize: '50px', margin: '5px' }}>Welcome {user.displayName} to Plenty Aces! </h1>
      <div className="intro" style={{ fontSize: '40px', margin: '50px' }}>
        <p>Plenty(a lot) Aces(great) Virtual Movie Collector is for Silver Screen Lovers both near and far. Cut out spending hours searching for where to buy the classics and just browse our collection where members share their favorites. Enjoy!  </p>
      </div>
      <button style={{ 'background-color': '#84190B' }} className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
