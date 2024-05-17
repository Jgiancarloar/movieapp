import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [search, setSearch] = useState("")
    const [movie, setMovie] = useState(null)


    const getMovies = (e) => {
        e.preventDefault()
        if ([search].includes("")) {
            alert("ingrese una pelicula porfavor")
            return
        }

        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=806c2d377a7232b2ed9619a4b51e9324`)
            .then((response) => response.json())
            .then((data) => setMovie(data.results))
            .catch((error) => console.error(error))
        setSearch("")
    }

    return (
        <MovieContext.Provider
            value={{ getMovies, search, setSearch, movie }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider }