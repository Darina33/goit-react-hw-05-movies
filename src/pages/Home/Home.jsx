import { useEffect, useState } from 'react';
import { getMoviesTrending } from 'services/movie-api';
import css from './Home.module.css';

import FilmsList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1 className={css.header} >Trending today</h1>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;