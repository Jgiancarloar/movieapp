import React from 'react'
import useMovieContext from '../hooks/useMovieContext'
import MovieView from './MovieView';

const MovieList = () => {

    const { movie } = useMovieContext();
    return (
        <div>
            {
                movie ? (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 pb-16 hidden-scroll w-full'>
                        {
                            movie.map((movie) => (
                                <MovieView key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className='h-full'>
                        <p className='text-white font-bold text-xl mt-10'>Here the searched movies will be displayed</p>
                    </div>
                )
            }
        </div>
    )
}

export default MovieList