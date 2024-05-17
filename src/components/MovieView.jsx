import React from 'react'

const MovieView = ({ movie }) => {

    console.log(movie)
    return (
        <article className='shadow-2xl shadow-white/30 hover:scale-105   '>
            <header className='relative group/img'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                <div className='absolute top-0 z-40 h-full w-full bg-white/50 backdrop-blur-sm invisible group-hover/img:visible overflow-y-scroll no-scrollbar p-5'>
                    <p className='text-justify'>{movie.overview}</p>
                </div>
            </header>
            <div className='p-5 h-24 text-white grid items-center justify-items-center'>
                <h4 className='text-sm font-semibold'>{movie.title}</h4>
                <span className='text-sm'>{movie.release_date}</span>
            </div>
        </article>
    )
}

export default MovieView