const movieApiUrl = 'https://api.themoviedb.org/3/movie';
const articleUrl = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=cc697bdf9b2d473f97c152659fde3fc9';

export const getMoviesByCriteria = async (criteria, page= 1) => {

    const response = await fetch(`${movieApiUrl}/${criteria}?language=en-US&page=${page}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjJlYzBmOGIyMTJiYjAwMDExODkxZjBmNGQyNzU0YyIsInN1YiI6IjYyZWIzY2E2MjVjZDg1MDA1ZDAwOWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf6LF6vTHtZeRYWjBbkJFeqV-V-6IxVRjU8zcbjD3nE',
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const result = await response.json();

    return result.results;

}

export const getArticles = async (criteria) => {

    const response = await fetch(`${articleUrl}&q=${criteria}`);

    const result = await response.json();

    return result.articles;

}

export const getMovie = async (id) => {

    const response = await fetch(`${movieApiUrl}/${id}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjJlYzBmOGIyMTJiYjAwMDExODkxZjBmNGQyNzU0YyIsInN1YiI6IjYyZWIzY2E2MjVjZDg1MDA1ZDAwOWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uf6LF6vTHtZeRYWjBbkJFeqV-V-6IxVRjU8zcbjD3nE',
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const result = await response.json();

    return result;

}

export const create = async (userData) => {

    const response = await fetch(`${movieApiUrl}`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        const result = await response.json();

        return result.user;


    } else {
        throw { message: 'Unable to create user!'}
    }


}
