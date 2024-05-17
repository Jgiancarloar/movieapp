import React from 'react'
import useMovieContext from '../hooks/useMovieContext'
import { PiFilmReelFill } from "react-icons/pi";

const MovieSearch = () => {

    const { search, setSearch, getMovies } = useMovieContext();
    
    return (
        <form
            className='flex flex-col items-center w-full gap-5'
            onSubmit={getMovies}
        >
            <div className='flex gap-2 items-center text-white'>
                <h4 className='text-3xl font-bold'>MovieApp</h4>
                <PiFilmReelFill size={35} />
            </div>
            <input
                className='w-full px-2 py-1 rounded text-lg outline-none'
                type="text"
                placeholder='Search a movie ...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default MovieSearch