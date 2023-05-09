const searchInput = document.getElementById('search-movies');
const movieList = document.getElementById('movie-list');
const allMovies = ['Hera Pheri', 'Pathan', 'Yeh jawani hai diwani', 'Evil Dead Rise', 'Spider Man'];
const dropdownMenu = document.querySelector('.dropdown-menu');
const searchinput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const applyFiltersBtn = document.getElementById('apply-filters-btn');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  const matchingMovies = [];

  for (let i = 0; i < allMovies.length; i++) {
    const movieTitle = allMovies[i].toLowerCase();
    if (movieTitle.indexOf(searchTerm) !== -1) {
      matchingMovies.push(allMovies[i]);
    }
  }

  // update the movie list with the matching movies
  movieList.innerHTML = '';
  for (let i = 0; i < matchingMovies.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = matchingMovies[i];
    movieList.appendChild(listItem);
  }
});


dropdownMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

applyFiltersBtn.addEventListener('click', () => {
  // Get the selected filters
  const searchTerm = searchinput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  // Filter the content on the page based on the selected filters
  // For example, you could hide any elements that do not match the search term or category
});

