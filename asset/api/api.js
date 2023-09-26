const genreInput = document.getElementById('genreInput');
const recommendButton = document.getElementById('recommendButton');
const resultContainer = document.getElementById('result');
const resultsContainer = document.getElementById('results');

recommendButton.addEventListener('click', recommendMovies);

function recommendMovies() {
  const enteredGenre = genreInput.value.trim();
  const apiKey = '1860b46ed7dc647d7565b2bf24daae8a';
  const genreId = getGenreIdByName(enteredGenre);

  if (genreId) {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayResults(data.results);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    console.error('Invalid genre name');
  }
}

function displayResults(result) {
    console.log(data.results)
    resultsContainer.innerHTML = '';

    results.forEach(result => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = `
        <h2>${result.title}</h2>
        <p>Release Date: ${result.release_date}</p>
        <p>Rating: ${result.vote_average}</p>
        <p>${result.overview}</p>
    `;
    resultsContainer.appendChild(movieElement);
  });
}

// Sample genre name to ID mapping
function getGenreIdByName(genreName) {
  const genres = {
    'action': 28,
    'comedy': 35,
    'drama': 18,
    // Add more genre mappings here
  };
  return genres[genreName.toLowerCase()];
}
