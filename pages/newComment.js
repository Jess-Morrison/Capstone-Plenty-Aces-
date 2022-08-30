import React from 'react';
// import { useRouter } from 'next/router';
import CommentForm from '../components/forms/commentForm';
// import { getMovies } from '../api/movieData';

export default function NewComment() {
  // const [movies, setMovies] = useState([]);
  // const router = useRouter();
  // const { firebaseKey } = router.query;

  // useEffect(() => {
  //   getMovies(firebaseKey).then(setMovies);
  // },
  // [firebaseKey]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm />
    </div>
  );
}
