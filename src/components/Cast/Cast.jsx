import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/movie-api';
import css from './Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMoviesCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <ul className={css.list}>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li className={css.item} key={id}>
              <img className={css.img}
                src={profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                    }
                alt={original_name}
              />
              <p>
                <span className={css.text}>Actor:</span> {original_name}
              </p>
              <p>
                <span className={css.text}>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Cast;