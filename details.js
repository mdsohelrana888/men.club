// Get the movieId from the URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get('movieId');

// Movie data (you can replace this with an API call if necessary)
const movieData = {
  'the-northman': {
    title: 'The Northman',
    poster: 'upcoming-1.png',
    genres: 'Action, Adventure, Thriller',
    runtime: '137 min',
    rating: '8.5',
    description: 'A Viking prince sets out on a quest to avenge his father’s murder.'
  },
  'free-guy': {
    title: 'Free Guy',
    poster: 'upcoming-3.png',
    genres: 'Comedy, Action, Adventure, Science Fiction',
    runtime: '115 min',
    rating: '7.5',
    description: 'A bank teller called Guy realizes he is a background character in a video game.'
  }
  // Add more movie data here...
};

// Select elements in the movie details page
const movieTitle = document.querySelector('.movie_title');
const moviePoster = document.getElementById('movie_poster');
const movieGenres = document.getElementById('movie_genres');
const movieRuntime = document.getElementById('movie_runtime');
const movieRating = document.getElementById('movie_rating');
const movieDescription = document.getElementById('movie_description');

// Populate movie details if movieId exists
if (movieData[movieId]) {
  const movie = movieData[movieId];
  movieTitle.textContent = movie.title;
  moviePoster.src = movie.poster;
  movieGenres.textContent = `Genres: ${movie.genres}`;
  movieRuntime.textContent = `Runtime: ${movie.runtime}`;
  movieRating.textContent = `Rating: ${movie.rating}`;
  movieDescription.textContent = movie.description;
} else {
  movieTitle.textContent = 'Movie not found';
}
