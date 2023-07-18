import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '3f48006f1c293d69c1d3e6663b29e8d0';

export const getMoviesTrending = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });

  return data.results;
};

export const fetchMoviesDetails = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });

  return data;
};

export const fetchMoviesCredits = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });

  return data.cast;
};

export const fetchMoviesReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });

  return data.results;
};

export const fetchMoviesSearch = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      query: query,
    },
  });

  return data.results;
};