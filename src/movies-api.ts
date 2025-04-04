import axios from 'axios';
import { Cast, Movie, MoviesOfDay, Review, SearchResult } from './commonTypes';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

interface Options {
  query: string;
  language: string;
  headers: {
    Authorization: string;
  };
}

const options: Options = {
  query: '',
  language: 'en-US',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M0YjY1Yzk3MzkxZjA5Nzg2YmY0YWIxNmExODIzOSIsInN1YiI6IjY2Mjk2M2RmZmVkNTk3MDE3ZWJmNjdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vXmibBa2bnfqt7yUmmXiZxZEfyfVWYv34nHytkJfh_k',
  },
};

export const getMovies = async (): Promise<MoviesOfDay[]> => {
  const response = await axios.get('/trending/movie/day', options);
  return response.data.results;
};

export const getMovieById = async (movieId: number): Promise<Movie> => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const searchMovies = async (query: string): Promise<SearchResult> => {
  const searchOptions = {
    ...options,
    params: {
      query: query,
    },
  };
  const response = await axios.get('/search/movie', searchOptions);
  return response.data;
};

export const getReviews = async (movieId: number): Promise<Review[]> => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const getCast = async (movieId: number): Promise<Cast[]> => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};
