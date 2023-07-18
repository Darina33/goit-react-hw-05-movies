import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesSearch  } from 'services/movie-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await fetchMoviesSearch(movieId);
        setReviews(Reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>Sorry, there are no reviews</p>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span>{author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;