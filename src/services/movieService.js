import * as request from "./requester";

const movieApiUrl = 'https://api.themoviedb.org/3/movie';
const articleUrl = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=cc697bdf9b2d473f97c152659fde3fc9';
const movieHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjJlYzBmOGIyMTJiYjAwMDExODkxZjBmNGQyNzU0YyIsInN1YiI6IjYyZWIzY2E2MjVjZDg1MDA1ZDAwOWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf6LF6vTHtZeRYWjBbkJFeqV-V-6IxVRjU8zcbjD3nE',
};

export const getMoviesByCriteria = (criteria, page= 1) => request.get(`${movieApiUrl}/${criteria}?language=en-US&page=${page}`,'', movieHeaders);

export const getMovieInfo = (id, additionalParameter='') => request.get(`${movieApiUrl}/${id}${additionalParameter}`,'', movieHeaders);

export const getArticles = (criteria) => request.get(`${articleUrl}&q=${criteria}`);

