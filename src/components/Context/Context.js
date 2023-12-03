import { useState, useEffect, useContext, createContext } from "react";
import genres from "../../Data/genres";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=secret ;)`
      );
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleFilter = (id) => {
    setActive(id);

    const filterMovie = movies.filter((movie) => movie.genre_ids.includes(id));

    if (id === 0) {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(filterMovie);
    }
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        filteredMovies,
        setFilteredMovies,
        handleFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
