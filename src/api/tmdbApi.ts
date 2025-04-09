import axios from 'axios';

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M0YjY1Yzk3MzkxZjA5Nzg2YmY0YWIxNmExODIzOSIsInN1YiI6IjY2Mjk2M2RmZmVkNTk3MDE3ZWJmNjdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vXmibBa2bnfqt7yUmmXiZxZEfyfVWYv34nHytkJfh_k',
    'Content-Type': 'application/json',
  },
});
