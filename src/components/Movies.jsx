import React, { Component } from 'react';
import MoviesApi from '../api/Movies'
import Movie from './Movie'
import "./Movies.css"

class Movies extends Component {
  state = { 
    movies: [],
    error: ""
  }
  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    try {
      const data= await MoviesApi()
      this.setState({ movies: data.slice(0, 5) })
    } catch(err) {
      this.setState({
        error: err
      })
    }
  }
  render() { 
    const { movies } = this.state;
    return (
      <div className="movies_container">
        { movies.map(movie => {
          return (
            <Movie movie={movie} key={movie.id} />
          )
        })}
      </div>
    )
  }
}
 
export default Movies;