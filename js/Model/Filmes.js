export class Filmes {
    async getFilmesPopular() {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=YOUR_API_KEY`;
        try {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs'
                }
            };
            const response = await fetch(apiUrl, options);
            const results = await response.json();

            console.log(results);

            return results.results.map(filme => ({
                title: filme.title,
                release_date: filme.release_date,
                poster_path: filme.poster_path,
                id: filme.id,
                vote: filme.vote_average
            }));
        } catch (error) {
            console.error("Erro ao obter filmes:", error);
        }
    }
}