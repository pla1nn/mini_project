const BASE_URL = 'http://localhost:3000';

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}

fetchMovies();
