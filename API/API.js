import axios from "axios";

export function getMoviesAPI() {
    return axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
}

