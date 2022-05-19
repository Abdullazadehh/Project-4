import axios from 'axios';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

function Favorites(props) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState('');

    const handleClick = (index) => {
        const arr = [...props.favorites];

        arr.splice(index, 1);

        props.setFavorites(arr);
    }

    const handleSave = async () => {
        setLoading(true);

        const arr = [...props.favorites];

        const newArr = arr.map(item => item.imdbID);

        const post = await axios.post('https://acb-api.algoritmika.org/api/movies/list', {
            "title": name,
            "movies": newArr
        });

        // const get = await axios.get('https://acb-api.algoritmika.org/api/movies/list/' + post.data.id);
        setList(post.data.id);

        setLoading(false);
    }

    return (
        <div className="favorites">
            <input value={name} onChange={(e) => setName(e.target.value)} className="favorites__name" />
            <ul className="favorites__list">
                {props.favorites.map((item, index) => {
                    return (
                        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }} key={item.imdbID}>
                            <span>{item.Title} ({item.Year})</span>
                            <button onClick={() => handleClick(index)}>x</button>
                        </li>
                    );
                })}
            </ul>
            {
                list ?
                    <Link to={`/list/${list}`}>Перейти к списку</Link>
                    :
                    <button onClick={handleSave} type="button" className="favorites__save" disabled={!name.trim()}>
                        {loading ? 'loading...' : 'Сохранить список'}
                    </button>
            }
        </div>
    );
}

export default Favorites