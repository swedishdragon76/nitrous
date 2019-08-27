import axios from 'axios';

export async function getMovies(
    languageCode,
    movieType,
    genreId,
    lastMovieId,
    sortBy
) {
    let apiName = 'GetMovies';

    if (sortBy === 'created') {
        apiName = 'GetMoviesOrderedByLastPostAddDate';
    }

    try {
        const response = await axios.get(
            `https://tool.steem.world/AAA/${apiName}?languageCode=${
                languageCode
            }&movieType=${movieType}&genreId=${genreId}&lastMovieId=${
                lastMovieId
            }`
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getMovie(languageCode, movieType, movieId) {
    try {
        const response = await axios.get(
            `https://tool.steem.world/AAA/GetMovie?languageCode=${
                languageCode
            }&movieType=${movieType}&movieId=${movieId}`
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getReviews(
    movieType,
    genreId,
    lastAuthor,
    lastPermlink,
    sortBy
) {
    try {
        const response = await axios.get(
            `https://tool.steem.world/AAA/GetPostsByGenre?movieType=${
                movieType
            }&genreId=${genreId}&lastAuthor=${lastAuthor}&lastPermlink=${
                lastPermlink
            }`
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}
