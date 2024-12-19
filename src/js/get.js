const allBtn = document.getElementById('all-button');

const moviesContainer = document.getElementById('movies_container')

allBtn.addEventListener('click', onAllButtonClick);

const BASE_URL = 'http://localhost:3000';

async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return await response.json()
}

async function onAllButtonClick() {
  try {
    const movies = await fetchMovies()
    renderMovies(movies)
  } catch (error) {
    console.error('failed to render')
  }
}

function renderMovies(movies) {
  const markUp = movies.map(({image, title, genre, year, id}) => `<li class="movies_item">
  <div class="">
      <img src="${image}" alt="${title}" class="movies_image">
      <h2 class="movies_title"><b>Title:</b>${title}</h2>
      <p class="movies_genre"><b>genre:</b>${genre}</p>
      <p class="movies_year"><b>year:</b>${year}</p>
  </div>
  <div class="">
      <button type="button" class="movies_item_button" id="editBtn">edit</button>
      <button type="button" class="movies_item_button" id="${id}">delete</button>
  </div>
</li>`).join('');

moviesContainer.insertAdjacentHTML('beforeend', markUp);
}