import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMoviesDetails } from 'services/movie-api';
import css from './MovieDetails.module.css';


const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await fetchMoviesDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&psig=AOvVaw0XRR8it2e2znih6C1Tj4rI&ust=1689779446766000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjVzY_FmIADFQAAAAAdAAAAABAS';

  return (
    <>
      <span>
        <Link className={css.btn} to={backLinkHref}>
          Go back
        </Link>
      </span>
      <div className={css.box}>
        <img className={css.img}
          src={poster}
          alt="get"
        />
        <div>
          <h2 className={css.title}>{movie.original_title}</h2>
          <h3 className={css.rating}>Rating: {Math.round(movie.vote_average)}</h3>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.text}>{movie.overview}</p>
          <h3 className={css.genres}>Genres</h3>
          <ul className={css.list}>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className={css.info}>Additional information</h2>
        <ul className={css.list__link}>
          <li>
            <NavLink className={css.item} to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.item} to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;