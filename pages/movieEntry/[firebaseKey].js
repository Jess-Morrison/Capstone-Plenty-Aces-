import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getMovies, getSingleMovie } from '../../api/movieData';
import { getCommentByMovieFirebaseKey } from '../../api/commentData';
import CollectionBar from '../../components/collectionBar';
import MovieCard from '../../components/movieCard';
import CommentCard from '../../components/commentCard';
import MovieDescription from '../../components/movieDescription';
import PurchaseLocation from '../../components/purchaseLocation';

export default function ViewMovieEntry() {
  const [movies, setMovies] = useState({});
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMovie(firebaseKey).then(setMovies);
  }, [firebaseKey]);

  useEffect(() => {
    getCommentByMovieFirebaseKey(firebaseKey).then(setComments);
  },
  [firebaseKey]);

  return (
    <div className="text-center my-4">
      <div style={{ margin: '5rem' }}>
        <CollectionBar />
      </div>
      <div style={{ margin: '5rem' }}>
        <PurchaseLocation movieObj={movies} />
      </div>
      <div style={{ margin: '5rem' }}>
        <MovieDescription
          key={firebaseKey}
          movieObj={movies}
        />
      </div>
      <div className="commentSection" style={{ margin: '5rem' }}>
        {comments.map((comment) => (
          <CommentCard key={comment.movieFirebaseKey} commentObj={comment} onUpdate={getCommentByMovieFirebaseKey} />
        ))}
        <Link href="/newComment" passHref>
          <Button variant="create">New Comment</Button>
        </Link>
      </div>
      <div className="cards" style={{ margin: '5rem' }}>
        <MovieCard key={firebaseKey} movieObj={movies} onUpdate={getMovies} />
      </div>
      <div className="d-flex flex-wrap" />
      {/* <Link href={`/movieEntry/edit/${movieObj.firebaseKey}`} passHref>
        <Button variant="info">EDIT</Button>
      </Link>
      <Button variant="danger" onClick={deleteThisBook} className="m-2">
        DELETE
      </Button> */}
    </div>
  );
}
