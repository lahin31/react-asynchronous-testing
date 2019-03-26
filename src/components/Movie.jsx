import React from 'react'
import "./Movie.css"

const Movie = props => {
  const { movie } = props
  return (
    <div className="movie">
      <h4>{movie.title}</h4>
      <img 
        style={{ width: "60%", maxWidth:"100%" }} 
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
        alt={movie.id}/>
      <p>Release Date: {movie.release_date}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Vote Avg: {movie.vote_average}</p>
    </div>
  )
}

export default Movie