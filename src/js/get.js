const allBtn = document.getElementById('all-button');

const moviesContainer = document.getElementById('movies_container')

allBtn.addEventListener('click', onAllButtonClick);

const BASE_URL = 'http://localhost:3000';

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}

function renderMovies(movies) {
  const markUp = movies.map(movie => `<li class="movies_item">
  <div class="">
      <img src="#" alt="" class="movies_image">
      <h2 class="movies_title"><b>Title:</b> The Shawshank Redemption</h2>
      <p class="movies_genre"><b>genre:</b> Drama</p>
      <p class="movies_year"><b>year:</b> 1994</p>
  </div>
  <div class="">
      <button type="button" class="movies_item_button" id="editBtn">edit</button>
      <button type="button" class="movies_item_button" id="deleteBtn">delete</button>
  </div>
</li>`).join('')
}