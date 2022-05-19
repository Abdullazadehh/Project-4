import React, { Component } from 'react';
import './MovieItem.css';


function MovieItem(props) {
    const handleClick = () => {
        const arr = [...props.favorites];

        const result = arr.some(elem => {
            return elem.imdbID === props.movie.imdbID;
        })

        if (result) {
            alert('bu film siyahida movcuddur');
            return;
        }

        props.setFavorites([...props.favorites, props.movie]);
    }

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={props.movie.Poster} alt={props.movie.Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{props.movie.Title}&nbsp;({props.movie.Year})</h3>
                <button onClick={handleClick} type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    );
}

export default MovieItem