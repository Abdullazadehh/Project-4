import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);

        const get = await axios.get(`https://acb-api.algoritmika.org/api/movies/list/${id}`);

        const arr = get.data.movies;

        setTitle(get.data.title);

        const newArr = [];

        for (let id of arr) {
            await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=74894545`).then(res => {
                newArr.push(res.data);
            })

            console.log(newArr);
        }

        setMovies(newArr);

        setLoading(false);
    }, [])


    return (
        <div className="list-page">
            <h1 className="list-page__title">{title}</h1>
            <ul>
                {loading && 'loading...'}
                {movies.map((item) => {
                    return (
                        <li style={{ marginBottom: '10px' }} key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage