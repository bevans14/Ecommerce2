import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ handleMovieClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiKey = '6a012ff350bc1bd4a28e7ef0173d15ef';
      const apiUrl = 'https://api.themoviedb.org/3/search/movie';

      const response = await axios.get(`${apiUrl}?query=${searchQuery}&api_key=${apiKey}`);

      setMovies(response.data.results);
      setError(null);
    } catch (error) {
      setError('Error fetching movies');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
