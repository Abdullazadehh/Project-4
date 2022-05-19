import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

function Movies(props) {
    return (
        <ul className="movies">
            {props.movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem movie={movie} favorites={props.favorites} setFavorites={props.setFavorites} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;