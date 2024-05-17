import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const useMovieContext = () => useContext(MovieContext)
export default useMovieContext;